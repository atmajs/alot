import { Alot } from '../src/alot'

UTest({
    'from range ... up' () {
        let arr = Alot.fromRange(1, 3).toArray();
        deepEq_(arr, [1, 2]);

        arr = Alot.fromRange(-2, 2).toArray();
        deepEq_(arr, [-2, -1, 0, 1])
    },
    'from range ... down' () {
        let arr = Alot.fromRange(3, 1).toArray();
        deepEq_(arr, [3, 2]);

        arr = Alot.fromRange(2, -2).toArray();
        deepEq_(arr, [2, 1, 0, -1])
    }
})
