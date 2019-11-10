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
    },
    'distinct Strings' () {
        let arr = [
            'Foo',
            'Bar',
            'Bar',
            'Foo'
        ];
        let alot = new Alot(arr);
        let result = alot.distinct().toArray();

        deepEq_(result, [
            'Foo',
            'Bar',
        ]);
    },
    'distinct object' () {
        let userA = { id: 1 };
        let userB = { id: 2 };
        let userC = { id: 3 };
        let arr = [
            userA,
            userB,
            userA,
            userC,
            userB,
        ];
        let alot = new Alot(arr);
        let result = alot.distinct().toArray();

        deepEq_(result, [
            userA,
            userB,
            userC,
        ]);
    },
})