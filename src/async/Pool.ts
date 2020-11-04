import { class_Dfr, class_EventEmitter } from "atma-utils";
import { IAlotStream, AlotStreamIterationResult } from '../streams/IAlotStream';


const $$setImmediate = typeof setImmediate === 'undefined'
    ? function (fn) {
        new Promise(() => fn());
    }
    : setImmediate;

export class AsyncPool <TModel, TResult> {

    results: (TResult | Error)[]
    queue: Promise<AlotStreamIterationResult<TResult>>[]
    index: number = -1;
    promise: PromiseLike<TResult[]>;

    resolved = false
    rejected = false
    done = false

    time = Date.now()

    constructor (public stream: IAlotStream<TResult>, public threads: number = 2, public errors: 'include' | 'ignore' | 'reject' = 'reject') {
        this.results = [];
        this.queue = [];
        this.promise = new class_Dfr;
    }

    start (): PromiseLike<TResult[]> {
        $$setImmediate(() => this.tick());
        return this.promise;
    }

    private tick () {
        while (this.done !== true && this.queue.length < this.threads) {
            let index = ++this.index;

            let promise = this.stream.nextAsync();
            this.waitFor(promise, index);
        }

        if (this.queue.length === 0 && this.resolved !== true) {
            this.resolved = true;
            (this.promise as any).resolve(this.results);
        }
    }

    private waitFor(promise: Promise<AlotStreamIterationResult<TResult>>, index: number) {
        this.queue.push(promise);

        promise.then(result => {
            $$setImmediate(() => this.continueFor(promise, index, null, result));
        }, error => {
            $$setImmediate(() => this.continueFor(promise, index, error, null));
        });
    }
    private continueFor(promise: Promise<AlotStreamIterationResult<TResult>>, index: number, error: Error, result: AlotStreamIterationResult<TResult>) {
        if (this.rejected === true) {
            return;
        }
        if (error != null) {
            if (this.errors === 'reject') {
                this.rejected = true;
                (this.promise as any).reject(error);
                return;
            }
            if (this.errors === 'include') {
                result = <any> { value: error, index };
            }
        }
        if (result != null) {
            if (result.done === true) {
                this.done = true;
            } else {
                let i = result.index;
                if (i == null) {
                    i = index;
                }
                this.results[index] = result.value;
            }
        }
        let i = this.queue.indexOf(promise);
        this.queue.splice(i, 1);
        this.tick();
    }
}
