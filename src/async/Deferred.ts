export class Deferred {

    isResolved = false;
    isRejected = false;

    resolvedArg: any;
    rejectedArg: any;

    resolveFn: Function
    rejectFn: Function

    promise = new Promise((resolve, reject) => {
        this.resolveFn = resolve;
        this.rejectFn = reject;
        if (this.isResolved === true) {
            resolve(this.resolvedArg);
        }
        if (this.isRejected === true) {
            reject(this.rejectedArg);
        }
    });

    resolve (arg?) {
        if (this.resolveFn) {
            this.resolveFn(arg);
            return;
        }
        this.isResolved = true;
        this.resolvedArg = arg;
    }
    reject (arg?) {
        if (this.rejectFn) {
            this.rejectFn(arg);
            return;
        }
        this.isRejected = true;
        this.rejectedArg = arg;
    }

    then (fnA, fnB?) {
        this.promise.then(fnA, fnB);
    }
}