import { Alot } from '../src/alot';
import sinon = require('sinon');

UTest({
    'fork' () {
        let arr = [
            {name: 'Foo'},
            {name: 'Bar'},
            {name: 'Foo'},
        ];
        let alot = new Alot(arr);
        let result = alot
            .fork(stream => {
                stream
                    .filter(x => x.name[0] === 'F')
                    .forEach(x => x.name += 1)
                    .toArray();
            })
            .map(x => x.name)
            .toArray();

        deepEq_(result, [
            'Foo1',
            'Bar',
            'Foo1'
        ]);
    }
})