import { Alot } from '../src/alot';
import sinon = require('sinon');

UTest({
    'toDictionary' () {
        let arr = [
            {id: 'foo', name: 'f'}, 
            {id: 'bar', name: 'b'}, 
            {id: 'qux', name: 'q'}, 
        ];
        let alot = new Alot(arr);
        let hash = alot.toDictionary(x => x.id);

        deepEq_(hash.foo, arr[0]);
        deepEq_(hash.bar, arr[1]);
        deepEq_(hash.qux, arr[2]);

        let names = alot.toDictionary(x => x.id, x => x.name);
        deepEq_(names.foo, arr[0].name);
        deepEq_(names.bar, arr[1].name);
        deepEq_(names.qux, arr[2].name);
    },
    async 'toDictionaryAsync' () {
        let arr = [
            {id: 'foo', name: 'f'}, 
            {id: 'bar', name: 'b'}, 
            {id: 'qux', name: 'q'}, 
        ];
        let alot = new Alot(arr);
        let hash = await alot.toDictionaryAsync(x => Promise.resolve(x.id));

        deepEq_(hash.foo, arr[0]);
        deepEq_(hash.bar, arr[1]);
        deepEq_(hash.qux, arr[2]);

        let names = await alot.toDictionaryAsync(x => Promise.resolve(x.id), x => Promise.resolve(x.name));
        deepEq_(names.foo, arr[0].name);
        deepEq_(names.bar, arr[1].name);
        deepEq_(names.qux, arr[2].name);
    }
})