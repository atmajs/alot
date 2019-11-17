<h1><font color='red'><code>a</code></font><code>lot</code></h1>
----

[![Build Status](https://travis-ci.org/atmajs/Ruta.png?branch=master)](https://travis-ci.org/tenbits/alot)
[![NPM version](https://badge.fury.io/js/alot.svg)](http://badge.fury.io/js/alot)
[![Bower version](https://badge.fury.io/bo/alot.svg)](http://badge.fury.io/bo/alot)


**Lazy** and perfomance-optimized `Collection` methods

* supports **async** handlers
* typescript definitions



```typescript

import { Alot } from 'alot';

const arr = [1,2,3, 4];

// Sync
const numbers = Alot(arr)
    .filter(x => x * 2)
    .skip(1)
    .take(2)
    .toArray();

// Async
const users = await Alot(arr)
    .mapAsync(async id => UserService.loadById(id))
    .toArrayAsync({ threads: 4 });

```

Methods: 

### `map`, `mapAsync`

```ts
map <T, TResult> (fn: (x: T, i?: number) => TResult): IAlotStream<TResult>
```

```ts
mapAsync <T, TResult> (fn: (x: T, i?: number) => PromiseLike<TResult>): IAlotStream<TResult>
```

### `mapMany`, 'mapManyAsync

```ts
map <T, TResult> (fn: (x: T, i?: number) => TResult[]): IAlotStream<TResult>
```

```ts
mapAsync <T, TResult> (fn: (x: T, i?: number) => PromiseLike<TResult[]>): IAlotStream<TResult>
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

### `take`, `takeWhile`

```ts
take <T> (count: number): IAlotStream<T>
```

```ts
takeWhile <T> (fn: (x: T, i?: number) => boolean): IAlotStream<T>
```

### `skip`, `skipWhile`

```ts
skip <T> (count: number): IAlotStream<T>
```

```ts
skipWhile <T> (fn: (x: T, i?: number) => boolean): IAlotStream<T>
```


### `groupBy`

```ts
groupBy <T, TKey = string > (fn: (x: T) => TKey): IAlotStream< { key: TKey[], values: T[] } >
```

### `distinctBy`

```ts
distinctBy <T, TKey = string> (fn: (x: T, i?: number) => TKey): IAlotStream<T>
```


### `sortBy`

```ts
sortBy <T> (fn: (x: T, i?: number) => string | number, direction: 'asc' | 'desc' = 'asc'): IAlotStream<T>
sortBy <T> (property: string, direction: 'asc' | 'desc' = 'asc'): IAlotStream<T>
// also nested path are supported 'user.foo.username'
```

# Output Data

### `toArray`

```ts
toArray(): T[]
```

### `toArrayAsync`

```ts
toArrayAsync(options: { threads: number } = { threads: 4 }): Promise<T[]>
```


### `toArrayDictionary`

```ts
toDictionary<TOut = T>(keyFn: (x: T) => string | number, valFn?: (x: T) => TOut ): { [key: string]: TOut }
```

### `first`, `find` (alias)

```ts
first(matcher?: (x: T, i?: number) => boolean): T
find(matcher?: (x: T, i?: number) => boolean): T
```



----
_Atma.js Project_
