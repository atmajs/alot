import { Alot } from '../src/alot';
import sinon = require('sinon');

UTest({
    'distinctBy' () {
        let arr = [
            {name: 'Foo'},
            {name: 'Bar'},
            {name: 'Foo'},
        ];
        let alot = new Alot(arr);
        let result = alot.distinctBy(x => x.name).toArray();

        deepEq_(result, [
            {name: 'Foo'},
            {name: 'Bar'},
        ]);
    }
})