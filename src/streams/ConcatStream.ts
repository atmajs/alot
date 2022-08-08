import { IAlotStream } from './IAlotStream';
import { AlotProto } from "../AlotProto";
import { r_DONE } from '../utils/r';

export class ConcatStream<TSource, TSourceB> extends AlotProto<(TSource | TSourceB), TSource> {
    private _sourceA = true;
    private _indxB = 0;

    constructor(public stream: IAlotStream<TSource>, public sourceB: Array<TSourceB>) {
        super(stream);
    }
    next() {
        if (this._sourceA) {
            let r = this.stream.next();
            if (r.done) {
                this._sourceA = false;
            } else {
                return r;
            }
        }
        if (this.sourceB == null || this._indxB >= this.sourceB.length) {
            return r_DONE;
        }

        let r = { value: this.sourceB[this._indxB], done: false };
        this._indxB += 1;
        return r;
    }
    reset () {
        this._sourceA = true;
        this._indxB = 0;
        return super.reset();
    }
}
