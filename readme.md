# Alot

<p align='center'>
    <img src='assets/background.png'/>
</p>

----

[![Build Status](https://api.travis-ci.com/atmajs/alot.png?branch=master)](https://app.travis-ci.com/github/atmajs/alot)
[![NPM version](https://badge.fury.io/js/alot.svg)](http://badge.fury.io/js/alot)
![ts](https://badgen.net/badge/Built%20With/TypeScript/blue)

**🌱 Lazy**, **⛓️ Async** and ⚡ Performance-Optimized `Array/Stream` methods


```ts

import alot from 'alot';

const users: IUser[];

// Sync
const userAgeGroups = alot(users)
    .distinctBy(x => x.email)
    .sortBy(x => x.createdAt)
    .groupBy(x => x.age)
    .skip(1)
    .take(2)
    .toArray();

// Async
const userData = await alot(users)
    .mapAsync(async user => UserService.loadFooMeta(user.id))
    .toArrayAsync({ threads: 4 });

```

----
- [📝 Blog Post 🔗](https://dev.kit.eco/alot-turns-your-arrays-into-lazy-and-async-streams)
- [📚 API Documentation 🔗](https://docs.atma.dev/alot/classes/Alot.html)
----

Methods overview:

### `map`, `mapAsync`

```ts
map <T, TResult> (fn: (x: T, i?: number) => TResult): IAlotStream<TResult>
```

```ts
mapAsync <T, TResult> (fn: (x: T, i?: number) => PromiseLike<TResult>): IAlotStream<TResult>
```

### `mapMany`, `mapManyAsync`

```ts
map <T, TResult> (fn: (x: T, i?: number) => TResult[]): IAlotStream<TResult>
```

```ts
mapAsync <T, TResult> (fn: (x: T, i?: number) => PromiseLike<TResult[]>): IAlotStream<TResult>
```


### `mapFull`, `mapFullAsync`

Transform the complete stream

```ts
mapFull <T, TResult> (fn: (arr: T[]) => TResult): IAlotStream<TResult>
```

```ts
mapFullAsync <T, TResult> (fn: (arr: T[]) => PromiseLike<TResult[]>): PromiseLike<TResult>
```

### `filter`, `filterAsync`

```ts
filter <T> (fn: (x: T, i?: number) => boolean): IAlotStream<T>
```

```ts
filterAsync <T> (fn: (x: T, i?: number) => PromiseLike<boolean>): IAlotStream<T>
```


### `forEach`, `forEachAsync`
```ts
forEach <T> (fn: (x: T, i?: number) => void | any): IAlotStream<T>
```
```ts
forEachAsync <T> (fn: (x: T, i?: number) => void | any): IAlotStream<T>
```

### `take`, `takeWhile`, `takeWhileAsync`

```ts
take <T> (count: number): IAlotStream<T>
```

```ts
takeWhile <T> (fn: (x: T) => boolean): IAlotStream<T>
takeWhileAsync <T> (fn: (x: T) => boolean | Promise<boolean>): IAlotStream<T>
```

### `skip`, `skipWhile`, `skipWhileAsync`

```ts
skip <T> (count: number): IAlotStream<T>
```

```ts
skipWhile <T> (fn: (x: T, i?: number) => boolean): IAlotStream<T>
skipWhileAsync <T> (fn: (x: T, i?: number) => boolean | Promise<boolean>): IAlotStream<T>
```


### `groupBy`

```ts
groupBy <T, TKey = string > (fn: (x: T) => TKey): IAlotStream< { key: TKey[], values: T[] } >
```



### `join`

> Join elements from collection `Inner` and collection `Outer` by the matched `Key`. Elements with **no** matches are **skipped**.

```ts
// Inner Left Join
join <TOuter, TResult> (
    inner: TInner[],
    getKeyOuter: (x: TOuter) => string | number,
    getKeyInner: (x: TInner) => string | number,
    joinFn: (a: TOuter, b: TInner) => TResult
): IAlotStream< TResult >
```

### `joinOuter`

> Join elements from collection `Inner` and collection `Outer` by the matched `Key`. Elements with **no** matches are **included** as is.

```ts
// Outer Full Join
joinOuter <TOuter, TResult> (
    inner: TInner[],
    getKey: (x: TOuter) => string | number,
    getForeignKey: (x: TInner) => string | number,
    joinFn: (a?: TOuter, b?: TInner) => TResult
): IAlotStream< TResult >

```


### `concat`

> Same as `Array::concat`

```ts
// Outer Full Join
concat <TSource> (
    other: TOther[],
): IAlotStream< (TSource | TOther) >

```

### `distinctBy`

```ts
distinctBy <T, TKey = string> (fn: (x: T, i?: number) => TKey): IAlotStream<T>
```


### `sortBy`, `sortByAsync`, `sortByLocalCompare`

```ts
sortBy <T> (fn: (x: T, i?: number) => string | number, direction: 'asc' | 'desc' = 'asc'): IAlotStream<T>
sortBy <T> (property: string, direction: 'asc' | 'desc' = 'asc'): IAlotStream<T>
// also nested path are supported 'user.foo.username'
```

### `thenBy`

`thenBy()` specifies a secondary sort method that is used to further sort data that has already been sorted with a call to `sortBy()`

```ts
alot(arr).sortBy(x => x.age).thenBy(x => x.name).toArray()
```

# Output Data

### `toArray`

```ts
toArray(): T[]
```

### `toArrayAsync`

```ts
toArrayAsync(options: {
    threads?: number
    errors?: 'reject' | 'include' | 'ignore'
} = { threads: 4, errors: 'reject' }): Promise<T[]>
```

> `errors` 'reject' - all iterations will be stopped and the task will reject.
> `errors` 'include' - all iterations will be executed, and any throw or rejection will be in resulted array.
> `errors` 'ignore' - all iterations will be executed, and any throw or rejection are ignored. The resulted array could contain holes.

### `toDictionary` `toDictionaryAsync`

```ts
toDictionary<TKey = string | number, TOut = T>(keyFn: (x: T) => TKey, valFn?: (x: T) => TOut ): { [key: string]: TOut }
toDictionaryAsync<TKey = string | number, TOut = T>(keyFn: (x: T) => TKey | Promise<TKey>, valFn?: (x: T) => TOut | Promise<TOut> ): Promise<{ [key: string]: TOut }>
```

### `toMap` `toMapAsync`

```ts
toDictionary<TKey = any, TOut = T>(keyFn: (x: T) => TKey, valFn?: (x: T) => TOut ): Map<TKey, TOut>
toDictionaryAsync<TKey = any, TOut = T>(keyFn: (x: T) => TKey | Promise<TKey>, valFn?: (x: T) => TOut | Promise<TOut> ): Promise<Map<TKey, TOut>>
```


### `first`, `find` (alias), `firstAsync`, `findAsync`

```ts
first(matcher?: (x: T, i?: number) => boolean): T
find(matcher?: (x: T, i?: number) => boolean): T

firstAsync(matcher?: (x: T, i?: number) => boolean | Promise<boolean>): Promise<T>
find(matcher?: (x: T, i?: number) => boolean | Promise<boolean>): Promise<T>
```

# Aggregation

### `sum`, `sumAsync`, `sumBigInt`, `sumBigIntAsync`

```ts
sum      (fn: (x: T, i?: number) => number): number
sumAsync (fn: (x: T, i?: number) => number | Promise<number>): Promise<number>
```

### `max`, `maxAsync`, `min`, `minAsync`

```ts
max <TNumeric> (getVal: (x: T, i?: number) => TNumeric): TNumeric
maxAsync <TNumeric> (getVal: (x: T, i?: number) => TNumeric): Promise<TNumeric>

min <TNumeric> (getVal: (x: T, i?: number) => TOut): TNumeric
minAsync <TNumeric> (getVal: (x: T, i?: number) => TOut): Promise<TNumeric>

```


# Static Methods


#### `fromObject`

```ts
alot.fromObject(foo: any): Alot<{ key: string, value: string }>
```


#### `fromRange`

```ts
alot.fromRange(start: number, endExcluded: number): Alot<number>
```

Supports ascending, e.g.`[-1..10)`, and descending ranges - `[10..-1)`

----
_Atma.js Project_
