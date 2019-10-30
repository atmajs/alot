export interface IAlotStream<T = any> {
    reset(): this;
    next(): AlotStreamIterationResult<T>;
    nextAsync (): Promise<AlotStreamIterationResult<T>>

    isAsync: boolean
    
    // canSeek: boolean
    
    // position: number
    // slice (start?: number, count?: number): T[]
}

export interface AlotStreamIterationResult<T> {
    value: T
    done: boolean
    index?: number
}