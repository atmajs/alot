import { IAlotStream, AlotStreamIterationResult } from '../streams/IAlotStream';
import { r_DONE } from './r';


interface TakeNextCb<T> {
    (error, val?: AlotStreamIterationResult<T>): void
}

export class IterateAsyncStream<T> {

    private done = false;
    private current: Promise<AlotStreamIterationResult<T>>
    private queue: TakeNextCb<T>[] = []
    
    constructor (public stream: IAlotStream<T>) {
        this.onValue = this.onValue.bind(this);
    }


    takeNext (cb?: TakeNextCb<T>) {
        if (this.done) {
            cb(null, r_DONE);
        }
        if (cb != null) {
            this.queue.push(cb);
        }
        if (this.current) {
            //-async_cb(this.current, this.onValue);
            return;
        }

        this.current = async_cb(this.stream.nextAsync(), this.onValue);
    }

    private onValue (err, result?: AlotStreamIterationResult<T>) {
        if (result && result.done) {
            this.done = true;
        }
        
        let cb = this.queue.shift();
        if (cb) {
            cb(err, result);
        }
        this.takeNext();
    }
}


export function async_cb <T = any> (promise: Promise<T>, cb: (error, val?: T) => void) {
    promise.then(
        val => cb(null, val),
        err => cb(err)
    );
    return promise;
}