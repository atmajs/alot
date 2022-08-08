import { Alot } from '../src/alot';

UTest({
    'concat simple' () {
        let a = [
            1,
            2,
        ]
        let b = [
            3,
            4,
            5,
        ];
        let alot = new Alot(a);
        let arr = alot.concat(b).toArray();
        eq_(arr.length, 5)
        deepEq_(arr, a.concat(b));

        arr = alot.concat(b).concat([6]).toArray();
        deepEq_(arr, a.concat(b).concat([6]));


        arr = alot.concat(b).filter(x => x % 2 === 0).toArray();
        deepEq_(arr, [2, 4]);

        arr = alot.filter(x => x % 2 === 0).concat(b).toArray();
        deepEq_(arr, [2, 3, 4, 5]);


    },
})
