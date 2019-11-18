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
        let sum = alot.count(x => x.num);
        eq_(sum, 9);
    },
    async 'sumAsync' () {
        let arr = [
            { num: 2}, 
            { num: 3}, 
            { num: 4}, 
        ];
        let alot = new Alot(arr);
        let sum = await alot.mapAsync(async x => x.num * 2).countAsync(x => x);
        eq_(sum, 18);
    }
})