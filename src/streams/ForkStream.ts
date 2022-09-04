import { IAlotStream } from './IAlotStream';
import { AlotProto } from "../AlotProto";
import { arr_last } from '../utils/arr';


export type ForkMethod <T> = (x: IAlotStream<T>) => void | any
export class ForkStreamInner<T> extends AlotProto<T> {
    public _cached = [];

    constructor(public stream: IAlotStream<T>, public fn: ForkMethod<T>) {
        super(stream);
    }
    next() {
        if (this.isAsync) {
            return this.nextAsync();
        }
        let last = arr_last(this._cached);
        if (last?.done) {
            return last;
        }
        let result = this.stream.next();
        this._cached.push(result);
        return result;
    }
    async nextAsync () {
        let last = arr_last(this._cached);
        if (last?.done) {
            return last;
        }
        let result = await this.stream.nextAsync();
        this._cached.push(result);
        return result;
    }
    reset () {
        this._cached = [];
        return super.reset();
    }
    pluck () {
        return this.fn(this);
    }
    has (i: number) {
        return i < this._cached.length;
    }
    get (i: number) {
        return this._cached[i];
    }
}

export class ForkStreamOuter<T> extends AlotProto<T> {
    public _index = 0;
    public _plucked = false;
    constructor(public stream: IAlotStream<T>, public inner: ForkStreamInner<T>) {
        super(stream);
    }
    next() {
        if (this.isAsync) {
            return this.nextAsync();
        }
        if (this._plucked === false) {
            this._plucked = true;
            this.inner.pluck();
        }
        if (this.inner.has(this._index)) {
            let result = this.inner.get(this._index);
            if (result.done !== true) {
                this._index++;
            }
            return result;
        }
        return this.stream.next();
    }
    async nextAsync () {
        if (this._plucked === false) {
            this._plucked = true;
            await this.inner.pluck();
        }
        if (this.inner.has(this._index)) {
            let result = this.inner.get(this._index);
            if (result.done !== true) {
                this._index++;
            }
            return result;
        }
        return this.stream.nextAsync();
    }
    reset () {
        this._index = 0;
        return super.reset();
    }
}
