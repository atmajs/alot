import { IAlotStream } from "./IAlotStream";
import { AlotProto } from "../AlotProto";
import { Deco } from '../utils/deco';

export class SkipStream<T> extends AlotProto<T> {
    private _skipped = 0;
    constructor(public stream: IAlotStream<T>, public _count: number) {
        super(stream);
    }
    next() {
        while (++this._skipped <= this._count) {
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

export interface TSkipWhileMethodOpts {
    //@TODO includeFirst?: boolean;
}

export type SkipWhileMethod<T> = (x: T, i?: number) => boolean
export class SkipWhileStream<T> extends AlotProto<T> {
    private _skipped = false;

    constructor(public stream: IAlotStream<T>, public fn: SkipWhileMethod<T>, public opts?: TSkipWhileMethodOpts) {
        super(stream);
    }
    next() {
        while (this._skipped === false) {
            let result = this.stream.next();
            if (result.done) {
                return result;
            }
            let b = this.fn(result.value, result.index);
            if (Boolean(b) === true) {
                continue;
            }
            this._skipped = true;
            return result;
        }
        return this.stream.next();
    }
    reset() {
        this._skipped = false;
        return super.reset();
    }
}


export type SkipWhileMethodAsync<T> = (x: T, i?: number) => boolean | Promise<boolean>;
export class SkipWhileStreamAsync<T> extends AlotProto<T> {
    isAsync = true;

    private _skipped = false;

    constructor(public stream: IAlotStream<T>, public fn: SkipWhileMethodAsync<T>, public opts?: TSkipWhileMethodOpts) {
        super(stream);
        // No matter how many streams do we have, ensure we call this not simultanously
        this.nextAsync = Deco.createQueuedMethod(this.nextAsync);
        this.next = this.nextAsync as any;
    }

    async nextAsync () {
        while (this._skipped === false) {
            let result = await this.stream.next();
            if (result.done === true) {
                return result;
            }

            let b = await this.fn(result.value, result.index);
            if (Boolean(b) === true) {
                continue;
            }
            this._skipped = true;
            return result;
        }
        return this.stream.next();
    }

    reset() {
        this._skipped = false;
        return super.reset();
    }
}
