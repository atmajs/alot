import { MethodFilter } from './Methods';
import { AlotMeta, AlotMetaAsync, AlotStreamOpts } from './AlotMeta';
import { AsyncPool } from './async/Pool';
import { Aggregation, TAggregateNumeric } from './utils/Aggregation'
/** Loading all stream from extra exports file to fix circular dependencies */
import {
    IAlotStream,
    AlotStreamIterationResult,
    GroupByKeyFn,
    GroupByStream,
    DistinctByKeyFn,
    DistinctByStream,
    SkipStream,
    SkipWhileMethod,
    SkipWhileStream,
    SkipWhileMethodAsync,
    SkipWhileStreamAsync,
    TakeStream,
    TakeWhileStream,
    TakeWhileStreamAsync,
    TakeWhileMethod,
    TakeWhileMethodAsync,
    MapStream,
    MapManyStream,
    MethodMap,
    MethodMapMany,
    FilterStream,
    FilterStreamAsync,
    ForEachStream,
    ForEachMethod,
    ForkStreamInner,
    ForkStreamOuter,
    SortByStream,
    SortByLocalCompareStream,
    SortMethod,
    JoinStream
} from './streams/exports';
import { is_Promise } from './utils/is';
import { ParametersFromSecond } from './utils/types';
import { type TTakeWhileMethodOpts } from './streams/TakeStream';
import { type TSkipWhileMethodOpts } from './streams/SkipStream';

export class AlotProto<T, TSource = T> implements IAlotStream<T> {
    isAsync = false;
    constructor(public stream: IAlotStream<TSource>, opts?: AlotStreamOpts) {
        this.isAsync = stream.isAsync || (opts?.async ?? false);
    }
    next(): AlotStreamIterationResult<T> {
        let x = this.stream.next() as unknown as AlotStreamIterationResult<T>;
        return x;
    }
    async nextAsync(): Promise<AlotStreamIterationResult<T>> {
        return this.next();
    }

    [Symbol.iterator] () {
        return this;
    }

    /**
     * Resets current stream to the beginning.
     */
    reset(): this {
        this.stream.reset();
        return this;
    }
    /**
     * Creates filtered stream. Is Lazy.
     * ```
     * alot(users).filter(x => x.age > 20).take(3).toArray();
     * ```
     * Filter is evaluated only N times, to match only 3 items.
     */
    filter(fn: MethodFilter<T>) {
        return new FilterStream(this, fn);
    }
    /**
     * Creates async filted stream. Same as filter, but accepts async methods, and returns awaitable stream.
     */
    filterAsync(fn: MethodFilter<T>) {
        return new FilterStreamAsync(this, fn);
    }
    map<TResult>(fn: MethodMap<T, TResult>) {
        return new MapStream<T, TResult>(this, fn);
    }
    mapAsync<TResult>(fn: MethodMap<T, TResult>, meta?: AlotMeta) {
        return new MapStream(this, fn, { async: true });
    }
    mapMany<TResult>(fn: MethodMapMany<T, TResult>) {
        return new MapManyStream<T, TResult>(this, fn);
    }
    mapManyAsync<TResult>(fn: MethodMapMany<T, TResult>) {
        return new MapManyStream(this, fn, { async: true });
    }
    forEach(fn: ForEachMethod<T>) {
        return new ForEachStream(this, fn);
    }
    forEachAsync<TResult>(fn: ForEachMethod<T>) {
        return new ForEachStream(this, fn, { async: true });
    }
    take(count: number) {
        return new TakeStream(this, count);
    }
    takeWhile(fn: TakeWhileMethod<T>, opts?: TTakeWhileMethodOpts) {
        return new TakeWhileStream(this, fn, opts);
    }
    takeWhileAsync(fn: TakeWhileMethodAsync<T>, opts?: TTakeWhileMethodOpts) {
        return new TakeWhileStreamAsync(this, fn, opts);
    }
    skip(count: number) {
        return new SkipStream(this, count);
    }
    skipWhile(fn: SkipWhileMethod<T>, opts?: TSkipWhileMethodOpts) {
        return new SkipWhileStream(this, fn, opts);
    }
    skipWhileAsync(fn: SkipWhileMethodAsync<T>, opts?: TSkipWhileMethodOpts) {
        return new SkipWhileStreamAsync(this, fn, opts);
    }
    groupBy<TKey = string>(fn: GroupByKeyFn<T, TKey>) {
        return new GroupByStream<T, TKey>(this, fn);
    }
    /** Join Left Inner  */
    join <TInner = T, TResult = T> (
        inner: TInner[],
        getKey: (x: T) => string | number,
        getForeignKey: (x: TInner) => string | number,
        joinFn: (a: T, b: TInner) => TResult,
        ) {
        return new JoinStream(this, inner, getKey, getForeignKey, joinFn, 'inner');
    }
    /** Join Full Outer  */
    joinOuter <TInner = T, TResult = T> (
        inner: TInner[],
        getKey: (x: T) => string | number,
        getForeignKey: (x: TInner) => string | number,
        joinFn: (a?: T, b?: TInner) => TResult,
        ) {
        return new JoinStream(this, inner, getKey, getForeignKey, joinFn, 'outer');
    }

    distinctBy(fn: DistinctByKeyFn<T>) {
        return new DistinctByStream(this, fn);
    }
    distinct() {
        return new DistinctByStream(this);
    }

    sortBy(sortByFn: SortMethod<T>, direction?: 'asc' | 'desc'): SortByStream<T>
    sortBy(sortByKey: keyof T | string, direction?: 'asc' | 'desc'): SortByStream<T>
    sortBy(mix: SortMethod<T> | keyof T | string, direction: 'asc' | 'desc' = 'asc'): SortByStream<T> {
        return new SortByStream(this, mix, direction);
    }

    sortByAsync(sortByFn: SortMethod<T>, direction?: 'asc' | 'desc'): SortByStream<T>
    sortByAsync(sortByKey: keyof T | string, direction?: 'asc' | 'desc'): SortByStream<T>
    sortByAsync(mix: SortMethod<T> | keyof T | string, direction: 'asc' | 'desc' = 'asc'): SortByStream<T> {
        return new SortByStream(this, mix, direction, /*isAsync*/ true);
    }

    sortByLocalCompare(getValFn: (x:T, i?: number) => string, direction?: 'asc' | 'desc', ...params: ParametersFromSecond<String['localeCompare']>): SortByLocalCompareStream<T> {
        return new SortByLocalCompareStream(this, getValFn, direction, params);
    }

    fork(fn: (stream: this) => void | any): this {
        let inner = new ForkStreamInner(this, fn);
        let outer = new ForkStreamOuter(this, inner);
        return outer as any;
    }

    toDictionary<TKey = string, TValue = any>(keyFn: (x: T) => TKey, valFn?: (x: T) => TValue): { [key: string]: TValue } {
        this.reset();
        let hash = Object.create(null);
        while (true) {
            let x = this.next();
            if (x.done) {
                return hash;
            }
            let key = keyFn(x.value);
            hash[key] = valFn ? valFn(x.value) : x.value;
        }
    }
    async toDictionaryAsync<TKey = string, TValue = any>(
        keyFn: (x: T) => Promise<TKey> | TKey,
        valFn?: (x: T) => Promise<TValue> | TValue
    ): Promise<{ [key: string]: TValue }> {
        this.reset();
        let hash = Object.create(null);
        while (true) {
            let x = await this.nextAsync();
            if (x.done) {
                return hash as any;
            }
            let key = await keyFn(x.value);

            hash[key] = valFn ? await valFn(x.value) : x.value;
        }
        return hash;
    }
    toMap<TKey = string, TValue = any>(
        keyFn: (x: T) => TKey,
        valFn?: (x: T) => TValue,
    ): Map<TKey, TValue> {
        this.reset();
        let map = new Map<TKey, TValue>();
        while (true) {
            let x = this.next();
            if (x.done) {
                return map;
            }
            let key = keyFn(x.value);
            let value = valFn != null ? valFn(x.value) : x.value;
            map.set(key, value as TValue);
        }
    }
    async toMapAsync<TKey = string, TValue = any>(
        keyFn: (x: T) => Promise<TKey> | TKey,
        valFn?: (x: T) => Promise<TValue> | TValue,
    ): Promise<Map<TKey, TValue>> {
        this.reset();

        let map = new Map<TKey, TValue>();
        while (true) {
            let x = await this.nextAsync();
            if (x.done) {
                return map;
            }
            let key = await keyFn(x.value);
            let value = valFn != null ? await valFn(x.value) : x.value;
            map.set(key, value as TValue);
        }
        return map;
    }
    toArray(): T[] {
        this.reset();
        let out = [];
        while (true) {
            let result = this.next();
            if (result.done === true) {
                break;
            }
            out.push(result.value);
        }
        return out;
    }
    toArrayAsync(meta: AlotMetaAsync = { threads: 4, errors: 'reject' }): PromiseLike<T[]> {
        this.reset();

        let pool = new AsyncPool(this, meta.threads, meta.errors);
        return pool.start();
    }
    first(matcher?: (x: T, i?: number) => boolean): T {
        this.reset();

        let i = 0;
        while (true) {
            let entry = this.next();
            if (entry == null || entry.done === true) {
                break;
            }
            if (matcher == null || matcher(entry.value, i++)) {
                return entry.value;
            }
        }
        return null;
    }
    async firstAsync(matcher?: (x: T, i?: number) => (boolean | Promise<boolean>)): Promise<T> {
        this.reset();

        let i = 0;
        while (true) {
            let entry = await this.nextAsync();
            if (entry == null || entry.done === true) {
                break;
            }
            if (matcher == null) {
                return entry.value;
            }
            let mix = matcher(entry.value, i++);
            let result: boolean = is_Promise(mix) ? await mix : mix;
            if (result) {
                return entry.value;
            }
        }
        return null;
    }
    find(matcher?: (x: T, i?: number) => boolean): T {
        return this.first(matcher);
    }
    findAsync(matcher?: (x: T, i?: number) => (boolean | Promise<boolean>)): Promise<T> {
        return this.firstAsync(matcher);
    }

    sum (getVal: (x: T, i?: number) => number, initialValue?: number): number
    sum (getVal: (x: T, i?: number) => bigint, initialValue: bigint): bigint
    sum (getVal: (x: T, i?: number) => any, initialValue?: any): any {
        return Aggregation.sum(this, getVal, initialValue ?? 0);
    }
    sumAsync (getVal: (x: T, i?: number) => number | Promise<number>, initialValue?: number): Promise<number> {
        return Aggregation.sumAsync(this, getVal, initialValue ?? 0);
    }
    sumBigInt (getVal: (x: T, i?: number) => bigint): bigint {
        return Aggregation.sum(this, getVal, BigInt(0));
    }
    sumBigIntAsync (getVal: (x: T, i?: number) => bigint | Promise<bigint>, initialValue?: bigint): Promise<bigint> {
        return Aggregation.sumAsync(this, getVal, initialValue ?? BigInt(0));
    }
    max <TOut extends TAggregateNumeric> (fn: (x: T, i?: number) => TOut): TOut {
        return Aggregation.getMinMaxValueBy(this, fn, 'max');
    }
    maxAsync <TOut extends TAggregateNumeric> (fn: (x: T, i?: number) => TOut): Promise<TOut> {
        return Aggregation.getMinMaxValueByAsync(this, fn, 'max');
    }
    maxItem <TOut extends TAggregateNumeric> (fn: (x: T, i?: number) => TOut): T {
        return Aggregation.getMinMaxItemBy(this, fn, 'max');
    }
    maxItemAsync <TOut extends TAggregateNumeric> (fn: (x: T, i?: number) => TOut): Promise<T> {
        return Aggregation.getMinMaxItemByAsync(this, fn, 'max');
    }
    min <TOut extends TAggregateNumeric> (fn: (x: T, i?: number) => TOut): TOut {
        return Aggregation.getMinMaxValueBy(this, fn, 'min');
    }
    minAsync <TOut extends TAggregateNumeric> (fn: (x: T, i?: number) => TOut): Promise<TOut> {
        return Aggregation.getMinMaxValueByAsync(this, fn, 'min');
    }
    minItem <TOut extends TAggregateNumeric> (fn: (x: T, i?: number) => TOut): T {
        return Aggregation.getMinMaxItemBy(this, fn, 'min');
    }
    minItemAsync <TOut extends TAggregateNumeric> (fn: (x: T, i?: number) => TOut): Promise<T> {
        return Aggregation.getMinMaxItemByAsync(this, fn, 'min');
    }
}
