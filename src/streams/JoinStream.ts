import { IAlotStream } from "./IAlotStream";
import { AlotProto } from "../AlotProto";
import { AlotStreamOpts } from '../AlotMeta';
import { r_DONE } from '../utils/r';

// left inner join
export interface MethodJoin<TOuter, TInner = TOuter, TResult = TOuter> {
    (
        inner: TInner[], 
        getOuterKey: (x: TOuter) => string | number, 
        getInnerKey: (x: TInner) => string | number,
        joinFn: (a: TOuter, b: TInner) => TResult
    ): TResult | PromiseLike<TResult>
}

// left outer join
export interface MethodJoin<TOuter, TInner = TOuter, TResult = TOuter> {
    (
        inner: TInner[], 
        getOuterKey: (x: TOuter) => string | number, 
        getInnerKey: (x: TInner) => string | number,
        joinFn: (a?: TOuter, b?: TInner) => TResult
    ): TResult | PromiseLike<TResult>
}

export type JoinType = 'inner' | 'outer'

export class JoinStream<TOuter, TInner = TOuter, TResult = TOuter> extends AlotProto<TResult, TOuter> {
    private _index = 0;
    private _innerExtra: TInner[] = null;
    private _innerExtraIndex = 0;
    private _innerHash = null;
    private _innerHashTook = Object.create(null);

    constructor(
        public stream: IAlotStream<TOuter>, 
        private inner: TInner[], 
        private fnKeyOuter: (x: TOuter) => string | number, 
        private fnKeyInner: (x: TInner) => string | number,
        private joinFn: (a?: TOuter, b?: TInner) => TResult, 
        private joinType: JoinType,
        opts?: AlotStreamOpts) {

        super(stream, opts);
    }
    
    next() {
        if (this.isAsync) {
            return this.nextAsync() as any;
        }
        if (this._innerExtra != null) {
            if (this._innerExtraIndex >= this._innerExtra.length) {
                return r_DONE;
            }

            let x = this._innerExtra[this._innerExtraIndex++];
            let result = this.joinFn(null, x);
            return { done: false, value: result, index: this._index++ };
        };
        let result = this.stream.next();
        if (result.done) {
            if (this.joinType === 'inner') {
                return r_DONE;
            }
            this._innerExtra = this.inner.filter(x => this.fnKeyInner(x) in this._innerHashTook === false);
            return this.next();
        }
        if (this._innerHash == null) {
            this._ensureInnerHash();
        }
        let outerKey = this.fnKeyOuter(result.value);
        let innerVal = this._innerHash[outerKey];
        if (innerVal == null) {
            if (this.joinType === 'inner') {
                return this.next();
            }
        } else {
            this._innerHashTook[outerKey] = 1;
        }

        let val = this.joinFn(result.value, innerVal);
        return {
            value: val,
            done: false,
            index: ++this._index
        };
    }
    async nextAsync() {
        throw new Error('Joins on async stream are not supported yet');
        return null;
    }
    reset () {
        this._index = 0;
        this._innerExtra = null;
        this._innerExtraIndex = 0;
        this._innerHash = null;
        this._innerHashTook = Object.create(null);
        return super.reset();
    }

    private _ensureInnerHash () {
        let hash = Object.create(null);
        for (let i = 0; i < this.inner.length; i++) {
            let x = this.inner[i];
            let key = this.fnKeyInner(x);
            // @TOOD if should check if key already exists
            hash[key] = x;
        }
        this._innerHash = hash;
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
