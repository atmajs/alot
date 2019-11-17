import { IAlotStream } from "./IAlotStream";
import { AlotProto } from "../AlotProto";
import { obj_getProperty } from '../utils/obj';


export interface SortMethod<T> {
    (x: T, i?: number): string | number
}

export class SortByStream<T> extends AlotProto<T> {
    isAsync = false

    private arr: T[]  = null
    private index = -1;
    private sortByFn: SortMethod<T>

    // constructor(stream: IAlotStream<T>, sortByFn: SortMethod<T>, direction?: 'asc' | 'desc')
    // constructor(stream: IAlotStream<T>, sortByKey: string, direction?: 'asc' | 'desc')
    constructor(public stream: IAlotStream<T>, mix: SortMethod<T> | keyof T | string, public direction: 'asc' | 'desc' = 'asc') {
        super(stream);
        if (typeof mix === 'string') {
            let path = mix;
            this.sortByFn = x => obj_getProperty(x, path);
        } else {
            this.sortByFn = <any> mix;
        }
    }
    next() {
        if (this.arr) {
            if (++this.index >= this.arr.length) {
                return { done: true, value: null };
            }

            return { 
                done: false, 
                index: this.index,
                value: this.arr[this.index] 
            };
        }
        this.arr = [];
        
        while (true) {
            let result = this.stream.next();
            if (result.done === true) {
                break;
            }
            this.arr.push(result.value);
        }

        let mapped: {i: number, key: string | number, val: T }[] = [];
        for (let i = 0; i < this.arr.length; i++) {
            mapped[i] = {
                i,
                key: this.sortByFn(this.arr[i], i),
                val: this.arr[i]
            }
        };
        mapped.sort((a, b) => {
            if (a.key === b.key) {
                return 0;
            }
            if (a.key < b.key) {
                return this.direction === 'asc' ? -1 : 1
            }
            return this.direction === 'asc' ? 1 : -1
        });
        let result = [];
        for (let i = 0; i < mapped.length; i++) {
            result[i] = mapped[i].val;
        }
        this.arr = result;
        return this.next();
    }

    reset () {
        this.index = -1;
        this.arr = null;
        return super.reset();
    }
}
