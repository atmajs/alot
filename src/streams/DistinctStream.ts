import { IAlotStream } from "./IAlotStream";
import { AlotProto } from "../AlotProto";


export interface DistinctByKeyFn<T, TKey = string | number> {
    (x: T, i?: number): TKey
}

export class DistinctByStream<T, TKey = string | number> extends AlotProto<T> {
    private _track = new Track;
    private _index = -1;

    constructor(public stream: IAlotStream<T>, public fn: DistinctByKeyFn<T, TKey> = null) {
        super(stream);
    }
    next() {
        while (true) {
            let result = this.stream.next();
            if (result.done === true) {
                return result;
            }
            let key = this.fn != null
                ? this.fn(result.value, result.index)
                : result.value;

            if (this._track.isUnique(key) === false) {
                continue;
            }
            return result;
        }
    }

    reset () {
        this._index = -1;
        this._track = new Track;
        return super.reset();
    }
}

class Track {
    private _hash = Object.create(null);
    private _map: Map<any, number>;
    isUnique (mix) {
        if (mix == null || typeof mix !== 'object') {
            if (mix in this._hash) {
                return false;
            }
            this._hash[mix] = 1;
            return true;
        }
        if (this._map == null) {
            this._map = new Map();
        }
        if (this._map.has(mix)) {
            return false;
        }
        this._map.set(mix, 1);
        return true;
    }
}
