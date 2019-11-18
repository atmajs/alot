import { Alot } from '../src/alot';
import sinon = require('sinon');

UTest({
    'max' () {
        let arr = [
            { num: 2}, 
            { num: 23}, 
            { num: 4}, 
        ];
        let alot = new Alot(arr);
        let max = alot.max(x => x.num);
        eq_(max, 23);
    },
    async 'maxAsync' () {
        let arr = [
            { num: 2}, 
            { num: 3}, 
            { num: 4}, 
        ];
        let alot = new Alot(arr);
        let max = await alot.mapAsync(async x => x.num * 2).maxAsync(x => x);
        eq_(max, 8);
    },
    'min' () {
        let arr = [
            { num: 2}, 
            { num: 23}, 
            { num: 4}, 
        ];
        let alot = new Alot(arr);
        let max = alot.min(x => x.num);
        eq_(max, 2);
    },
    async 'minAsync' () {
        let arr = [
            { num: 5}, 
            { num: 3}, 
            { num: 4}, 
        ];
        let alot = new Alot(arr);
        let max = await alot.mapAsync(async x => x.num * 2).minAsync(x => x);
        eq_(max, 6);
    }
})