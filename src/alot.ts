import './streams/FilterStream'
import './streams/MapStream'
import './streams/SkipStream'
import './streams/TakeStream'
import './streams/GroupStream'

import { AlotMeta } from './AlotMeta';
import { AlotProto } from './AlotProto';
import { IAlotStream, AlotStreamIterationResult } from './streams/IAlotStream';


export class Alot<T = any> extends AlotProto<T> {
    constructor (public array: T[], public meta?: AlotMeta) {
        super(new ArrayStream(array));
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


