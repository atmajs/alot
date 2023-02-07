import { IAlotStream } from "./IAlotStream";
import { AlotProto } from "../AlotProto";
import { MethodFilter } from '../Methods';
import { Deco } from '../utils/deco';
import { AlotMetaAsync } from '../AlotMeta';


export class FilterStream<T> extends AlotProto<T> {
    constructor(public stream: IAlotStream<T>, public fn: MethodFilter<T>) {
        super(stream);
    }
    next() {
        while (true) {
            let result = this.stream.next();
            if (result.done === true) {
                return result;
            }
            let b = this.fn(result.value, result.index);
            if (Boolean(b) === false) {
                continue;
            }
            return result;
        }
    }
}
export class FilterStreamAsync<T> extends AlotProto<T> {
    isAsync = true;

    private _index = -1;

    constructor(public stream: IAlotStream<T>, public fn: MethodFilter<T>) {
        super(stream);
        this.nextAsync = Deco.createQueuedMethod(this.nextAsync);
        this.next = this.nextAsync as any;
    }

    async nextAsync () {
        let i = ++this._index;

        while (true) {
            let result = await this.stream.next();
            if (result.done === true) {
                return result;
            }
            let b = await this.fn(result.value, result.index);
            if (Boolean(b) === false) {
                continue;
            }
            result.index = i
            return result;
        }
    }
    reset () {
        this._index = -1;
        return super.reset();
    }
}
