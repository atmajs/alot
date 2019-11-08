<h1><font color='red'><code>a</code></font><code>lot</code></h1>
----

[![Build Status](https://travis-ci.org/atmajs/Ruta.png?branch=master)](https://travis-ci.org/tenbits/alot)
[![NPM version](https://badge.fury.io/js/alot.svg)](http://badge.fury.io/js/alot)
[![Bower version](https://badge.fury.io/bo/alot.svg)](http://badge.fury.io/bo/alot)


**Lazy** and perfomance-optimized `Collection` methods

* supports Async handlers
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
    .toArrayAsync();

```

Methods: 

* `map <T, TResult> (fn: (x: T, i?: number) => TResult)`
* `mapAsync <T, TResult> (fn: (x: T, i?: number) => PromiseLike<TResult>)`
* `filter <T> (fn: (x: T, i?: number) => boolean)`
* `filterAsync <T> (fn: (x: T, i?: number) => PromiseLike<boolean>)`
* `mapMany`
* `mapManyAsync`
* `take`
* `takeWhile`
* `skip`
* `skipWhile`
* `groupBy`
* `distinctBy <T, TKey = string | number> (fn: (x: T, i?: number) => TKey)`



* `toArray(): T[]`
* `toArrayAsync(): Promise<T[]>`
* `toDictionary<TOut = T>(keyFn: (x: T) => string | number, valFn?: (x: T) => TOut ): { [key: string]: TOut }`


----
_Atma.js Project_
