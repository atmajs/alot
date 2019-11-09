import { IAlotStream } from "./IAlotStream";
import { AlotProto } from "../AlotProto";
import { AlotStreamOpts } from '../AlotMeta';


export interface ForEachMethod<T> {
    (x: T, i?: number): void | any | never
}

export class ForEachStream<T> extends AlotProto<T> {
    private _index: number = 0;

    constructor(public stream: IAlotStream<T>, public fn: ForEachMethod<T>, opts?: AlotStreamOpts) {
        super(stream, opts);
    }
    next() {
        if (this.isAsync === true) {
            return this.nextAsync() as any;
        }
        let result = this.stream.next();
        if (result.done) {
            return result;
        }
        this.fn(result.value, this._index++);
        return result;
    }
    async nextAsync () {
        let item = await this.stream.nextAsync();
        if (item.done) {
            //* skipped extra-object
            item.value = null;
            return item as any;
        }
        await this.fn(item.value, this._index++);
        return {
            value: item.value,
            done: false
        };
    }
    reset() {
        this._index = 0;
        return super.reset();
    }
}
