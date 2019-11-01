import { Alot } from '../src/alot';

UTest({
    'groupBy' () {
        let arr = [
            {id: 'foo', name: 'f'}, 
            {id: 'bar', name: 'b'}, 
            {id: 'qux', name: 'f'}, 
        ];
        let alot = new Alot(arr);
        let groups = alot.groupBy(x => x.name).toArray();
        
        eq_(groups.length, 2)
        eq_(groups[0].key, 'f');
        eq_(groups[1].key, 'b');


        let hash = alot.groupBy(x => x.name).toDictionary(x => x.key, x => x.values);

        deepEq_(hash.f, [ arr[0], arr[2] ]);
        deepEq_(hash.b, [ arr[1] ]);
    }
})