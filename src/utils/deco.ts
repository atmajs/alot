import { Deferred } from '../async/Deferred';

export const Deco = {
    createQueuedMethod<T extends (...any) => Promise<any>>(fn: T, opts: { trimQueue: boolean } = null): T {
        let method = new Queued.Method(fn, opts);
        return function (...args) {
            return method.run(this, args);
        } as any as T;
    }
};

namespace Queued {

    class Task {
        private dfr = new Deferred();

        public promise = this.dfr as any as Promise<any>;

        constructor(private ctx, private fn, private args) {

        }

        run() {
            let { fn, ctx, dfr, args } = this;
            let result = fn.apply(ctx, args);
            if ('then' in result === false) {
                dfr.resolve(result);
                return result;
            }

            result.then(
                _result => {
                    dfr.resolve(_result);
                },
                _error => {
                    dfr.reject(_error);
                }
            );
            return result;
        }

        always(fn) {
            this.dfr.then(fn, fn);
        }
    }
    export class Method<T extends (...any) => Promise<any>>{

        private queue = [];
        private busy = false;

        constructor(private fn: T, private opts: { trimQueue: boolean } = null) {

        }

        run(ctx: any, args: any[]) {
            let { fn } = this;
            let wrapped = new Task(ctx, fn, args);

            if (this.opts?.trimQueue === true && this.queue.length > 0) {
                this.queue.splice(0);
            }
            this.queue.push(wrapped);
            if (this.busy === false) {
                this.busy = true;
                this.tick();
            }
            return wrapped.promise;
        }

        private tick() {
            let task = this.queue.shift();
            if (task == null) {
                this.busy = false;
                return;
            }
            task.always(() => this.tick());
            task.run();
        };
    }
}
