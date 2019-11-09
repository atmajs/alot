import { IAlotStream } from "./IAlotStream";
import { AlotProto } from "../AlotProto";


export interface ForEachMethod<T> {
    (x: T, i?: number): void | any | never
}

export class ForEachStream<T> extends AlotProto<T> {
    private _index: number = 0;
    constructor(public stream: IAlotStream<T>, public fn: ForEachMethod<T>) {
        super(stream);
    }
    next() {
        
        let result = this.stream.next();
        if (result.done) {
            return result;
        }
        this.fn(result.value, this._index++);
        return result;
    }
    reset() {
        this._index = 0;
        return super.reset();
    }
}
