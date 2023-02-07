import { IAlotStream } from "./IAlotStream";
import { AlotProto } from "../AlotProto";
import { obj_getProperty } from '../utils/obj';
import { ParametersFromSecond } from '../utils/types';
import { r_DONE } from '../utils/r';
import { Deco } from '../utils/deco';


export type SortMethod<T> = (x: T, i?: number) => string | number | bigint | { valueOf (): number | string };

export class SortByStream<T> extends AlotProto<T> {
    isAsync = false;

    private arr: T[]  = null
    private index = -1;
    private sortByFn: SortMethod<T>

    // constructor(stream: IAlotStream<T>, sortByFn: SortMethod<T>, direction?: 'asc' | 'desc')
    // constructor(stream: IAlotStream<T>, sortByKey: string, direction?: 'asc' | 'desc')
    constructor(public stream: IAlotStream<T>, mix: SortMethod<T> | keyof T | string, public direction: 'asc' | 'desc' = 'asc', isAsync?: boolean) {
        super(stream);
        if (typeof mix === 'string') {
            let path = mix;
            this.sortByFn = x => obj_getProperty(x, path);
        } else {
            this.sortByFn = <any> mix;
        }
        this.nextAsync = Deco.createQueuedMethod(this.nextAsync);
        this.isAsync = isAsync ?? this.stream.isAsync;
    }
    next() {
        if (this.arr != null) {
            return Utils.next(++this.index, this.arr);
        }
        const arr = Utils.bufferSync(this.stream);
        this.arr = Utils.sort(arr, this.sortByFn, this.direction);
        return this.next();
    }

    async nextAsync() {
        if (this.arr != null) {
            return Utils.next(++this.index, this.arr);
        }
        const arr = await Utils.bufferAsync(this.stream);
        this.arr = Utils.sort(arr, this.sortByFn, this.direction);
        return this.next();
    }
    reset () {
        this.index = -1;
        this.arr = null;
        return super.reset();
    }
}



export class SortByLocalCompareStream<T> extends AlotProto<T> {
    isAsync = false

    private arr: T[]  = null
    private index = -1;


    // constructor(stream: IAlotStream<T>, sortByFn: SortMethod<T>, direction?: 'asc' | 'desc')
    // constructor(stream: IAlotStream<T>, sortByKey: string, direction?: 'asc' | 'desc')
    constructor(
        public stream: IAlotStream<T>,
        public getValue: (x:T, i?: number) => string,
        public direction: 'asc' | 'desc' = 'asc',
        public params: ParametersFromSecond<String['localeCompare']>
    ) {
        super(stream);
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

        let mapped: {i: number, key: string, val: T }[] = [];
        for (let i = 0; i < this.arr.length; i++) {
            mapped[i] = {
                i,
                key: this.getValue(this.arr[i], i),
                val: this.arr[i]
            }
        };
        mapped.sort((a, b) => {
            let x = a.key.localeCompare(b.key, ...this.params);
            if (this.direction === 'asc') {
                return x;
            }
            return x * -1;
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


namespace Utils {
    export function next <T> (index: number, arr: T[]) {
        if (index >= arr.length) {
            return r_DONE;
        }
        return {
            done: false,
            index: index,
            value: arr[index]
        };
    }
    export async function bufferAsync <T> (stream: IAlotStream<T>) {
        const arr = [];
        while (true) {
            let result = await stream.nextAsync();
            if (result.done === true) {
                break;
            }
            arr.push(result.value);
        }
        return arr;
    }
    export function bufferSync <T> (stream: IAlotStream<T>) {
        const arr = [];
        while (true) {
            let result = stream.next();
            if (result.done === true) {
                break;
            }
            arr.push(result.value);
        }
        return arr;
    }
    export function sort <T> (arr: T[], getValueFn: SortMethod<T>, direction: 'asc' | 'desc') {
        let mapped: {i: number, key: ReturnType<SortMethod<T>>, val: T }[] = [];
        for (let i = 0; i < arr.length; i++) {
            mapped[i] = {
                i,
                key: getValueFn(arr[i], i),
                val: arr[i]
            }
        };
        mapped.sort((a, b) => {
            if (a.key === b.key) {
                return 0;
            }
            if (a.key < b.key) {
                return direction === 'asc' ? -1 : 1
            }
            return direction === 'asc' ? 1 : -1
        });
        let result = [];
        for (let i = 0; i < mapped.length; i++) {
            result[i] = mapped[i].val;
        }
        return result;
    }
}
