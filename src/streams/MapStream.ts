import { IAlotStream } from "./IAlotStream";
import { AlotProto } from "../AlotProto";
import { AlotStreamOpts } from '../AlotMeta';
import { r_DONE } from '../utils/r';

export interface MethodMap<T, TResult> {
    (x: T, i?: number): TResult | PromiseLike<TResult>
}
export class MapStream<TSource, TResult> extends AlotProto<TResult, TSource> {
    constructor(public stream: IAlotStream<TSource>, public fn: MethodMap<TSource, TResult>, private opts?: AlotStreamOpts) {
        super(stream);
    }
    
    next() {
        if (this.opts != null && this.opts.async) {
            return this.nextAsync() as any;
        }
        let result = this.stream.next();
        if (result.done) {
            return { value: null, done: true };
        }
        return {
            value: this.fn(result.value, result.index) as TResult,
            done: false
        };
    }
    async nextAsync() {
        let result = await this.stream.nextAsync();
        if (result.done) {
            return { value: null, done: true };
        }
        return {
            value: await this.fn(result.value, result.index),
            done: false
        };
    }
}


export interface MethodMapMany<T, TResult> {
    (x: T, i?: number): TResult[] | PromiseLike<TResult[]>
}
export class MapManyStream<T, TResult> extends AlotProto<TResult, T> {
    private _index = -1;
    private _many: TResult[] = null
    private _mapDfr = null
    private _done = false

    constructor(public stream: IAlotStream<T>, public fn: MethodMapMany<T, TResult>, public opts?: AlotStreamOpts) {
        super(stream);
        this.isAsync = stream.isAsync || opts && opts.async;
    }
    next () {
        if (this.opts != null && this.opts.async) {
            return this.nextAsync();
        }
        if (this._many != null && this._index < this._many.length - 1) {
            let x = this._many[ ++this._index ];
            return { done: false, value: x };
        }
        let result = this.stream.next();
        if (result.done) {
            return result;
        }
        this._many = this.fn(result.value, result.index) as TResult[];
        this._index = -1;
        return this.next();
    }
    async nextAsync() {
        if (this._done === true) {
            return r_DONE;
        }
        if (this._many != null && this._index < this._many.length - 1) {
            let x = this._many[ ++this._index ];
            return { done: false, value: x };
        }
        if (this._mapDfr == null) {
            this._doMapAsync();
        }
        await this._mapDfr;
        return this.nextAsync();
    }

    reset () {
        this._many = null;
        this._done = false;
        this._mapDfr = null;
        this._index = -1;
        return super.reset();
    }

    private _doMapAsync () {
        return this._mapDfr = new Promise(async (resolve, reject) => {
            let result = await this.stream.next();
            if (result.done) {
                this._done = true;
                resolve();
            }
            this._many = await this.fn(result.value, result.index);
            this._index = -1;
            this._mapDfr = null;
            resolve()
        });
    }
}
