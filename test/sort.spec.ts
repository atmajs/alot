import { Alot } from '../src/alot';

UTest({
    'sortBy Function' () {
        let arr = [
            {id: 'foo', name: 'f'},
            {id: 'bar', name: 'b'},
            {id: 'qux', name: 'f'},
        ];
        let alot = new Alot(arr);
        let sortedAsc = alot.sortBy(x => x.name).toArray();

        deepEq_(sortedAsc.map(x => x.name), ['b', 'f', 'f']);

        let sortedDesc = alot.sortBy(x => x.name, 'desc').toArray();
        deepEq_(sortedDesc.map(x => x.name), ['f', 'f', 'b']);
    },
    async 'sortBy Function Async ' () {
        let arr = [
            {num: 2 },
            {num: 4 },
            {num: 1 },
            {num: 3 },
        ];

        let alot = new Alot(arr);
        let sortedAsc = await alot
            .mapAsync(x => Promise.resolve(x))
            .sortByAsync(x => x.num)
            .toArrayAsync();

        deepEq_(sortedAsc.map(x => x.num), [1, 2, 3, 4]);
    },
    'sortBy Property' () {
        let arr = [
            {id: 'foo', name: 'f'},
            {id: 'bar', name: 'b'},
            {id: 'qux', name: 'f'},
        ];
        let alot = new Alot(arr);
        let sortedAsc = alot.sortBy('name').toArray();

        deepEq_(sortedAsc.map(x => x.name), ['b', 'f', 'f']);

        let sortedDesc = alot.sortBy('name', 'desc').toArray();
        deepEq_(sortedDesc.map(x => x.name), ['f', 'f', 'b']);
    },
    'sortBy Deep Property' () {
        let arr = [
            {name: 'foo', some: { num: 2}},
            {name: 'bar', some: { num: 4}},
            {name: 'qux', some: { num: 1}},
        ];
        let alot = new Alot(arr);
        let sortedAsc = alot.sortBy('some.num').toArray();

        deepEq_(sortedAsc.map(x => x.name), ['qux', 'foo', 'bar']);

        let sortedDesc = alot.sortBy('some.num', 'desc').toArray();
        deepEq_(sortedDesc.map(x => x.name), ['bar', 'foo', 'qux']);
    },
    'sortBy Locale string' () {
        let arr = [
            {name: 'foo' },
            {name: 'bar' },
            {name: 'qux' },
            {name: 'baa' },
        ];
        let alot = new Alot(arr);
        let sortedAsc = alot.sortByLocalCompare(x => x.name).toArray();

        deepEq_(sortedAsc.map(x => x.name), ['baa', 'bar', 'foo', 'qux']);

        let sortedDesc = alot.sortByLocalCompare(x => x.name, 'desc').toArray();
        deepEq_(sortedDesc.map(x => x.name), ['qux', 'foo', 'bar', 'baa']);
    },
    'sortBy with thenBy' () {
        let arr = [
            { name: 'f', num: 2 },
            { name: 'd', num: 4 },
            { name: 'q', num: 2, },
            { name: 'b', num: 3 },
            { name: 'a', num: 2 },
        ];

        '> asc -> no thenBy'
        let alot = new Alot(arr);
        let sortedAsc = alot
            .sortBy(x => x.num)
            .toArray();

        deepEq_(sortedAsc.map(x => x.num), [2, 2, 2, 3, 4]);
        deepEq_(sortedAsc.map(x => x.name), ['f', 'q', 'a', 'b', 'd']);

        `> asc -> asc`
        alot = new Alot(arr);
        sortedAsc = alot
            .sortBy(x => x.num)
            .thenBy(x => x.name)
            .toArray();

        deepEq_(sortedAsc.map(x => x.num), [2, 2, 2, 3, 4]);
        deepEq_(sortedAsc.map(x => x.name), ['a', 'f', 'q', 'b', 'd']);


        `> asc -> desc`
        alot = new Alot(arr);
        sortedAsc = alot
            .sortBy(x => x.num)
            .thenBy(x => x.name, 'desc')
            .toArray();

        deepEq_(sortedAsc.map(x => x.num), [2, 2, 2, 3, 4]);
        deepEq_(sortedAsc.map(x => x.name), ['q', 'f', 'a', 'b', 'd']);

        `> desc -> asc`
        alot = new Alot(arr);
        sortedAsc = alot
            .sortBy(x => x.num, 'desc')
            .thenBy(x => x.name)
            .toArray();

        deepEq_(sortedAsc.map(x => x.num), [4, 3, 2, 2, 2]);
        deepEq_(sortedAsc.map(x => x.name), ['d', 'b', 'a', 'f', 'q']);

        `> desc -> desc`
        alot = new Alot(arr);
        sortedAsc = alot
            .sortBy(x => x.num, 'desc')
            .thenBy(x => x.name, 'desc')
            .toArray();

        deepEq_(sortedAsc.map(x => x.num), [4, 3, 2, 2, 2]);
        deepEq_(sortedAsc.map(x => x.name), ['d', 'b', 'q', 'f', 'a']);
    },
})
