import { Alot } from '../src/alot';
import sinon = require('sinon');

UTest({
    'toMap' () {
        let arr = [
            {id: 'foo', name: 'f'},
            {id: 'bar', name: 'b'},
            {id: 'qux', name: 'q'},
        ];
        let alot = new Alot(arr);
        let map = alot.toMap(x => x.id);

        deepEq_(map.get('foo'), arr[0]);
        deepEq_(map.get('bar'), arr[1]);
        deepEq_(map.get('qux'), arr[2]);

        let names = alot.toMap(x => x.id, x => x.name);
        deepEq_(names.get('foo'), arr[0].name);
        deepEq_(names.get('bar'), arr[1].name);
        deepEq_(names.get('qux'), arr[2].name);
    },
    async 'toMapAsync' () {
        let arr = [
            {id: 'foo', name: 'f'},
            {id: 'bar', name: 'b'},
            {id: 'qux', name: 'q'},
        ];
        let alot = new Alot(arr);
        let hash = await alot.toMapAsync(x => Promise.resolve(x.id));

        deepEq_(hash.get('foo'), arr[0]);
        deepEq_(hash.get('bar'), arr[1]);
        deepEq_(hash.get('qux'), arr[2]);

        let names = await alot.toMapAsync(x => Promise.resolve(x.id), x => Promise.resolve(x.name));
        deepEq_(names.get('foo'), arr[0].name);
        deepEq_(names.get('bar'), arr[1].name);
        deepEq_(names.get('qux'), arr[2].name);
    }
})
