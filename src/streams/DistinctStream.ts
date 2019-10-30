import { IAlotStream } from "./IAlotStream";
import { AlotProto } from "../AlotProto";


export interface DistinctByKeyFn<T, TKey = string> {
    (x: T, i?: number): TKey
}

export class DistinctByStream<T, TKey = string | number> extends AlotProto<T> {
    private _hash = Object.create(null);
    private _index = -1;

    constructor(public stream: IAlotStream<T>, public fn: DistinctByKeyFn<T, TKey>) {
        super(stream);
    }
    next() {
        while (true) {
            let result = this.stream.next();
            if (result.done === true) {
                return result;
            }
            let key = String(this.fn(result.value, result.index));
            if (this._hash[key] != null) {
                continue;
            }
            this._hash[key] = result.value;
            return result;
        }
    }

    reset () {
        this._index = -1;
        this._hash = Object.create(null);
        return super.reset();
    }
}
