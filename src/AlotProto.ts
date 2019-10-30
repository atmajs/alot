import { MethodFilter } from './Methods';
import { AlotMeta, AlotMetaAsync } from './AlotMeta';
import { AsyncPool } from './async/Pool';
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
    FilterStreamAsync
} from './streams/exports';


export class AlotProto<T, TSource = T> implements IAlotStream<T> {
    isAsync = false;
    constructor(public stream: IAlotStream<TSource>) {
        this.isAsync = stream.isAsync;
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
    distinctBy(fn: DistinctByKeyFn<T>) {
        return new DistinctByStream(this, fn);
    }


    forEach(fn: (x: T, index?: number) => void) {
        while (true) {
            let x = this.next();
            if (x.done) {
                return;
            }
            fn(x.value, x.index);
        }
    }
    toDictionary(keyFn: (x: T) => string | any, valFn?: (x: T) => any): { [key: string]: T } {
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
    async toDictionaryAsync(keyFn: (x: T) => string | Promise<string> | any, valFn?: (x: T) => Promise<any> | any): Promise<{ [key: string]: T }> {
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
    toArrayAsync(meta: AlotMetaAsync = { threads: 4 }): PromiseLike<T[]> {
        this.reset();

        let pool = new AsyncPool(this, meta.threads);
        return pool.start();
    }
    first(): T {
        return this.reset().next().value;
    }
}
