import { IAlotStream } from '../streams/IAlotStream';

export namespace Aggregation {
    export function getMinMaxBy<T, TOut> (stream: IAlotStream<T>, getFn: (x: T, i?: number) => TOut, compare: 'min' | 'max') {
        let out:TOut = null;
        stream.reset();
        if (stream.isAsync) {
            return getMinMaxByAsync(stream, getFn, compare) as any;
        }
        let i = 0;
        while (true) {
            let entry = stream.next();
            if (entry == null || entry.done === true) {
                break;
            }
            let val = getFn(entry.value, i++);
            if (val == null) {
                continue;
            }
            if (out == null) {
                out = val;
                continue;
            }
            if (compare === 'max' && out < val) {
                out = val;
            }
            if (compare === 'min' && out > val) {
                out = val;
            }
        }
        return out;
    }
    export async function getMinMaxByAsync<T, TOut> (stream: IAlotStream<T>, getFn: (x: T, i?: number) => TOut | Promise<TOut>, compare: 'min' | 'max') {
        let out:TOut = null;
        stream.reset();
        let i = 0;
        while (true) {
            let entry = await stream.nextAsync();
            if (entry == null || entry.done === true) {
                break;
            }
            let val = await getFn(entry.value, i++);
            if (val == null) {
                continue;
            }
            if (out == null) {
                out = val;
                continue;
            }
            if (compare === 'max' && out < val) {
                out = val;
            }
            if (compare === 'min' && out > val) {
                out = val;
            }
        }
        return out;
    }

    export function sum <T> (stream: IAlotStream<T>, fn: (x: T, i?: number) => number): number {
        stream.reset();
        if (stream.isAsync) {
            return sumAsync(stream, fn) as any;
        }
        let sum = 0;
        let i = 0;
        while (true) {
            let entry = stream.next();
            if (entry == null || entry.done === true) {
                break;
            }
            sum += fn(entry.value, i++) ?? 0;
        }
        return sum;
    }
    export async function sumAsync <T> (stream: IAlotStream<T>, fn: (x: T, i?: number) => number | Promise<number>): Promise<number> {
        stream.reset();
        let sum = 0;
        let i = 0;
        while (true) {
            let entry = await stream.nextAsync();
            if (entry == null || entry.done === true) {
                break;
            }
            sum += (await fn(entry.value, i++)) ?? 0;
        }
        return sum;
    }
}