import Alot from '../src/export'

UTest({
    'as function' () {
        let stream = Alot([1, 2]);
        let arr = stream.map(x => x * 2).toArray();

        deepEq_(arr, [ 2, 4 ]);;
    },
    'as constructor' () {
        let stream = new Alot([1, 2]);
        let arr = stream.map(x => x * 3).toArray();

        deepEq_(arr, [ 3, 6 ]);;
    }
})