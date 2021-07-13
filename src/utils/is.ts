export function is_Promise (val: any): val is Promise<any>{
    return val != null
        && typeof val === 'object'
        && typeof val.then === 'function'
        ;
}
