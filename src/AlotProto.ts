import { MethodFilter } from './Methods';
import { AlotMeta, AlotMetaAsync, AlotStreamOpts } from './AlotMeta';
import { AsyncPool } from './async/Pool';
import { Aggregation } from './utils/Aggregation'
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
    TakeStream,
    TakeWhileStream,
    TakeWhileMethod,
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
    SortMethod,
    JoinStream
} from './streams/exports';

export class AlotProto<T, TSource = T> implements IAlotStream<T> {
    isAsync = false;
    constructor(public stream: IAlotStream<TSource>, opts?: AlotStreamOpts) {
        this.isAsync = stream.isAsync || (opts?.async ?? false);
    }
    next(): AlotStreamIterationResult<T> {
        return this.stream.next() as unknown as AlotStreamIterationResult<T>;
    }
    async nextAsync(): Promise<AlotStreamIterationResult<T>> {
        return this.next();
    }
    reset() {
        this.stream.reset();
        return this;
    }
    filter(fn: MethodFilter<T>) {
        return new FilterStream(this, fn);
    }
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
    takeWhile(fn: TakeWhileMethod<T>) {
        return new TakeWhileStream(this, fn);
    }
    skip(count: number) {
        return new SkipStream(this, count);
    }
    skipWhile(fn: SkipWhileMethod<T>) {
        return new SkipWhileStream(this, fn);
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
    ): Promise<{ [key: string]: T }> {
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
    find(matcher?: (x: T, i?: number) => boolean): T {
        return this.first(matcher);
    }

    sum (getVal: (x: T, i?: number) => number): number {
        return Aggregation.sum(this, getVal);
    }
    sumAsync (getVal: (x: T, i?: number) => number | Promise<number>): Promise<number> {
        return Aggregation.sumAsync(this, getVal);
    }
    max <TOut extends number | { valueOf: () => number }> (fn: (x: T, i?: number) => TOut): TOut {
        return Aggregation.getMinMaxValueBy(this, fn, 'max');
    }
    maxAsync <TOut extends number | { valueOf: () => number }> (fn: (x: T, i?: number) => TOut): Promise<TOut> {
        return Aggregation.getMinMaxValueByAsync(this, fn, 'max');
    }
    maxItem <TOut extends number | { valueOf: () => number }> (fn: (x: T, i?: number) => TOut): T {
        return Aggregation.getMinMaxItemBy(this, fn, 'max');
    }
    maxItemAsync <TOut extends number | { valueOf: () => number }> (fn: (x: T, i?: number) => TOut): Promise<T> {
        return Aggregation.getMinMaxItemByAsync(this, fn, 'max');
    }
    min <TOut extends number | { valueOf: () => number }> (fn: (x: T, i?: number) => TOut): TOut {
        return Aggregation.getMinMaxValueBy(this, fn, 'min');
    }
    minAsync <TOut extends number | { valueOf: () => number }> (fn: (x: T, i?: number) => TOut): Promise<TOut> {
        return Aggregation.getMinMaxValueByAsync(this, fn, 'min');
    }
    minItem <TOut extends number | { valueOf: () => number }> (fn: (x: T, i?: number) => TOut): T {
        return Aggregation.getMinMaxItemBy(this, fn, 'min');
    }
    minItemAsync <TOut extends number | { valueOf: () => number }> (fn: (x: T, i?: number) => TOut): Promise<T> {
        return Aggregation.getMinMaxItemByAsync(this, fn, 'min');
    }
}
