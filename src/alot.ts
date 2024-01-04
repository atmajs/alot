import './streams/exports'

import { AlotMeta } from './AlotMeta';
import { AlotProto } from './AlotProto';
import { IAlotStream, AlotStreamIterationResult } from './streams/IAlotStream';


export class Alot<T = any> extends AlotProto<T> {
    constructor (public array: T[], public meta?: AlotMeta) {
        super(new ArrayStream(array));
    }

    static fromObject <TValue> (obj: { [key: string]: TValue }): Alot<{ key: string, value: TValue }> {
        let arr = Object.keys(obj).map(key => {
            return { key, value: obj[key] };
        });
        return new Alot(arr);
    }

    static fromRange(start: number, endExcluded: number) {
        let size = Math.abs(endExcluded - start);
        let arr = new Array(size);
        if (start <= endExcluded) {
            let min = start;
            let max = endExcluded;
            for (let i = min; i < max; i++) {
                arr[i - min] = i;
            }
        } else {
            let min = endExcluded;
            let max = start;
            for (let i = max; i > min; i--) {
                arr[max - i] = i;
            }
        }
        return new Alot(arr);
    }
}

export class ArrayStream<T> implements IAlotStream<T> {
    isAsync = false

    private index = -1;
    constructor (public array: T[]) {}
    next (): AlotStreamIterationResult<T> {
        while (++this.index < this.array.length) {
            let x = this.array[this.index];
            return { value: x, done: false, index: this.index };
        }
        return { value: null, done: true, index: this.index };
    }
    async nextAsync () {
        return this.next();
    }
    reset () {
        this.index = -1;
        return this;
    }
}


