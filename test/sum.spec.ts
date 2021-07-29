import { Alot } from '../src/alot';
import sinon = require('sinon');

UTest({
    'sum' () {
        let arr = [
            { num: 2},
            { num: 3},
            { num: 4},
        ];
        let alot = new Alot(arr);
        let sum = alot.sum(x => x.num);
        eq_(sum, 9);
    },
    'sum bigint' () {
        let arr = [
            { num: 1n},
        ];
        let alot = new Alot(arr);
        let sum = alot.sumBigInt(x => x.num * 5n);
        eq_(sum, 5n);

        arr.splice(0);

        let sumEmpty = alot.sum(x => x.num * 5n, 0n);
        eq_(typeof sumEmpty, 'bigint');
        eq_(sumEmpty, 0n);
    },
    async 'sumAsync' () {
        let arr = [
            { num: 2},
            { num: 3},
            { num: 4},
        ];
        let alot = new Alot(arr);
        let sum = await alot.mapAsync(async x => x.num * 2).sumAsync(x => x);
        eq_(sum, 18);
    }
})
