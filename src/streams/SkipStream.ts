import { IAlotStream } from "./IAlotStream";
import { AlotProto } from "../AlotProto";

export class SkipStream<T> extends AlotProto<T> {
    private _skipped = 0;
    constructor(public stream: IAlotStream<T>, public count: number) {
        super(stream);
    }
    next() {
        while (++this._skipped <= this.count) {
            let skip = this.stream.next();
            if (skip.done) {
                return skip;
            }
            continue;
        }
        return this.stream.next();
    }

    reset() {
        this._skipped = 0;
        return super.reset();
    }
}

export interface SkipWhileMethod<T> {
    (x: T): boolean
}
export class SkipWhileStream<T> extends AlotProto<T> {
    private _skipped = false;

    constructor(public stream: IAlotStream<T>, public fn: SkipWhileMethod<T>) {
        super(stream);
    }
    next() {
        while (this._skipped === false) {
            let result = this.stream.next();
            if (result.done) {
                return result;
            }
            if (this.fn(result.value)) {
                continue;
            }
            this._skipped = true;
        }
        return this.stream.next();
    }
    reset() {
        this._skipped = false;
        return super.reset();
    }
}
