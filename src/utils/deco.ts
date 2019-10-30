import { Deferred } from '../async/Deferred';

export const Deco = {
    queued (opts: { trimQueue: boolean } = null) {
        return function (target, propertyKey, descriptor) {
            var viaProperty = descriptor == null;
            var fn = viaProperty ? target[propertyKey] : descriptor.value;
            var queue = [];
            var busy = false;
            var resultFn = function () {
                let wrapped = Queued.prepair(fn, this);
                if (opts != null && opts.trimQueue && queue.length > 0) {
                    queue.splice(0);
                }
                queue.push(wrapped);
                if (busy === false) {
                    busy = true;
                    tick();
                }
                return wrapped.promise;
            };
            var tick = function () {
                let x = queue.shift();
                if (x == null) {
                    busy = false;
                    return;
                }
                x.always(tick);
                x.run.apply(this, arguments);
            };

            if (viaProperty) {
                target[propertyKey] = resultFn;
                return;
            }
            descriptor.value = resultFn;
            return descriptor;
        }
    }
};

const Queued = {
    prepair(fn, ctx) {
        let dfr = new Deferred;
        return {
            promise: dfr,
            run() {
                let result = fn.apply(ctx, arguments);
                if ('then' in result === false) {
                    dfr.resolve(result);
                } else {
                    result.then(
                        _result => {
                            dfr.resolve(_result);
                        },
                        _error => {
                            dfr.reject(_error);
                        }
                    );
                }
                return result;
            },
            always(fn) {
                dfr.then(fn, fn);
            }
        };
    }
}