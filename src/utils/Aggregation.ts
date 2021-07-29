import { IAlotStream } from '../streams/IAlotStream';

export type TAggregateNumeric = number | { valueOf: () => number } | bigint;

export namespace Aggregation {
    function getMinMaxByEntryInner<T, TOut> (
        stream: IAlotStream<T>
        , getFn: (x: T, i?: number) => TOut
        , compare: 'min' | 'max'
    ): { value: TOut, entry: T } {
        let outVal:TOut = null;
        let outEntry: T = null;
        stream.reset();
        if (stream.isAsync) {
            return getMinMaxByEntryInnerAsync(stream, getFn, compare) as any;
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
            if (outVal == null) {
                outVal = val;
                outEntry = entry.value;
                continue;
            }
            if (compare === 'max' && outVal < val) {
                outVal = val;
                outEntry = entry.value;
            }
            if (compare === 'min' && outVal > val) {
                outVal = val;
                outEntry = entry.value;
            }
        }
        return { value: outVal, entry: outEntry };
    }
    async function getMinMaxByEntryInnerAsync<T, TOut> (
        stream: IAlotStream<T>
        , getFn: (x: T, i?: number) => TOut | Promise<TOut>
        , compare: 'min' | 'max'
    ): Promise<{ value: TOut, entry: T }> {
        let outVal:TOut = null;
        let outEntry: T = null;
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
            if (outVal == null) {
                outVal = val;
                outEntry = entry.value;
                continue;
            }
            if (compare === 'max' && outVal < val) {
                outVal = val;
                outEntry = entry.value;
            }
            if (compare === 'min' && outVal > val) {
                outVal = val;
                outEntry = entry.value;
            }
        }
        return { value: outVal, entry: outEntry };
    }

    export function getMinMaxValueBy<T, TOut> (
        stream: IAlotStream<T>
        , getFn: (x: T, i?: number) => TOut
        , compare: 'min' | 'max'
    ) {
        if (stream.isAsync) {
            return getMinMaxByEntryInnerAsync(stream, getFn, compare) as any;
        }
        let x = getMinMaxByEntryInner(stream, getFn, compare);
        return x.value;
    }
    export async function getMinMaxValueByAsync<T, TOut> (
        stream: IAlotStream<T>
        , getFn: (x: T, i?: number) => TOut | Promise<TOut>
        , compare: 'min' | 'max'
    ) {
        let x = await getMinMaxByEntryInner(stream, getFn, compare);
        return x.value;
    }

    export function getMinMaxItemBy<T, TOut> (
        stream: IAlotStream<T>
        , getFn: (x: T, i?: number) => TOut
        , compare: 'min' | 'max'
    ) {
        if (stream.isAsync) {
            return getMinMaxByEntryInnerAsync(stream, getFn, compare) as any;
        }
        let x = getMinMaxByEntryInner(stream, getFn, compare);
        return x.entry;
    }
    export async function getMinMaxItemByAsync<T, TOut> (
        stream: IAlotStream<T>
        , getFn: (x: T, i?: number) => TOut | Promise<TOut>
        , compare: 'min' | 'max'
    ) {
        let x = await getMinMaxByEntryInner(stream, getFn, compare);
        return x.entry;
    }

    export function sum <T> (stream: IAlotStream<T>, fn: (x: T, i?: number) => number, startVal: number): number
    export function sum <T> (stream: IAlotStream<T>, fn: (x: T, i?: number) => bigint, startVal: bigint): bigint
    export function sum <T> (stream: IAlotStream<T>, fn: (x: T, i?: number) => any, startVal: any): any {
        stream.reset();
        if (stream.isAsync) {
            return sumAsync(stream, fn, startVal) as any;
        }
        let sum = startVal;
        let i = 0;
        while (true) {
            let entry = stream.next();
            if (entry == null || entry.done === true) {
                break;
            }
            let value = fn(entry.value, i++);
            if (value == null) {
                continue;
            }
            sum += value;
        }
        return sum;
    }
    export async function sumAsync <T> (stream: IAlotStream<T>, fn: (x: T, i?: number) => number | Promise<number>, startVal: number): Promise<number>
    export async function sumAsync <T> (stream: IAlotStream<T>, fn: (x: T, i?: number) => bigint | Promise<bigint>, startVal: bigint): Promise<bigint>
    export async function sumAsync <T> (stream: IAlotStream<T>, fn: (x: T, i?: number) => any | Promise<any>, startVal: any): Promise<any> {
        stream.reset();
        let sum = startVal;
        let i = 0;
        while (true) {
            let entry = await stream.nextAsync();
            if (entry == null || entry.done === true) {
                break;
            }
            let value = await fn(entry.value, i++);
            if (value == null) {
                continue;
            }
            sum += value;
        }
        return sum;
    }
}
