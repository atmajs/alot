import { IAlotStream } from './IAlotStream';
import { AlotProto } from "../AlotProto";
import { Deco } from '../utils/deco';
import { r_DONE } from '../utils/r';

export class TakeStream<T> extends AlotProto<T> {
    private _took = 0;
    constructor(public stream: IAlotStream<T>, public _count: number) {
        super(stream);
    }
    next() {
        if (++this._took > this._count) {
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
    (x: T, i?: number): boolean
}
export interface TakeWhileMethodAsync <T> {
    (x: T, i?: number): boolean | Promise<boolean>
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
        if (this.fn(result.value, result.index) === false) {
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

export class TakeWhileStreamAsync<T> extends AlotProto<T> {
    isAsync = true;

    private _took = false;

    constructor(public stream: IAlotStream<T>, public fn: TakeWhileMethodAsync<T>) {
        super(stream);
        this.next = this.nextAsync as any;
    }

    @Deco.queued()
    async nextAsync () {
        if (this._took === true) {
            return r_DONE;
        }
        let result = await this.stream.next();
        if (result.done === true) {
            return result;
        }
        let b = await this.fn(result.value, result.index);
        if (Boolean(b) === false) {
            this._took = true;
            return r_DONE;
        }
        return result;
    }

    reset () {
        this._took = false;
        return super.reset();
    }
}

