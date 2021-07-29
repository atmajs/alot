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
})
