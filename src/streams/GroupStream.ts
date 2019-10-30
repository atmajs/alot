import { IAlotStream } from "./IAlotStream";
import { AlotProto } from "../AlotProto";


export interface GroupByKeyFn<T, TKey = string> {
    (x: T, i?: number): TKey
}
interface IGroup<T, TKey = string> {
    key: TKey
    values: T[]
}

export class GroupByStream<TSource, TKey = string | number> extends AlotProto< IGroup<TSource, TKey>, TSource > {
    isAsync = false

    private groups: IGroup<TSource, TKey>[]  = null
    private hash = null;

    private index = -1;
    constructor(public stream: IAlotStream<TSource>, public fn: GroupByKeyFn<TSource, TKey>) {
        super(stream);
    }
    next() {
        if (this.groups) {
            if (++this.index >= this.groups.length) {
                return { done: true, value: null };
            }

            return { 
                done: false, 
                index: this.index,
                value: this.groups[this.index] 
            };
        }
        this.groups = [];
        this.hash = Object.create(null);
        
        while (true) {
            let result = this.stream.next();
            if (result.done === true) {
                break;
            }
            let keyVal = this.fn(result.value, result.index);
            let key = String(keyVal);
            let arr = this.hash[key];
            if (arr == null) {
                arr = this.hash[key] = [];
                this.groups.push({ 
                    key: keyVal, 
                    values: arr 
                });
            }
            arr.push(result.value);
        }
        return this.next();
    }

    reset () {
        this.index = -1;
        return super.reset();
    }
}
