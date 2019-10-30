import { IAlotStream } from './IAlotStream';
import { AlotProto } from "../AlotProto";

export class TakeStream<T> extends AlotProto<T> {
    private _took = 0;
    constructor(public stream: IAlotStream<T>, public count: number) {
        super(stream);
    }
    next() {
        if (++this._took > this.count) {
            return { value: null, done: true };
        }
        return this.stream.next();
    }
    reset () {
        this._took = 0;
        return super.reset();
    }
}

export interface TakeWhileMethod <T> {
    (x: T): boolean
}
export class TakeWhileStream<T> extends AlotProto<T> {
    private _took = false;
    constructor(public stream: IAlotStream<T>, public fn: TakeWhileMethod<T>) {
        super(stream);
    }
    next() {
        if (this._took === true) {
            return { done: true, value: null };
        }
        let result = this.stream.next();
        if (result.done) {
            return result;
        }
        if (this.fn(result.value) === false) {
            this._took = true;
            return this.next();
        }
        return result;
    }
    reset () {
        this._took = false;
        return super.reset();
    }
}
