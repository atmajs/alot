import { Alot } from '../src/alot';
import sinon = require('sinon');

UTest({
    'should get min/max value': {
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
        'max dates' () {
            let arr = [
                { date: new Date(2012, 1, 1)},
                { date: new Date(2019, 1, 1)},
                { date: new Date(2010, 1, 1)},
            ];
            let alot = new Alot(arr);
            let max = alot.max(x => x.date);
            eq_(max.getFullYear(), 2019);
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
    },
    'should get item by min/max value': {
        'max' () {
            let arr = [
                { num: 2},
                { num: 99},
                { num: 4},
            ];
            let alot = new Alot(arr);
            let max = alot.maxItem(x => x.num);
            eq_(max.num, 99);
        },
        async 'maxAsync' () {
            let arr = [
                { num: 2},
                { num: 3},
                { num: 4},
            ];
            let alot = new Alot(arr);
            let max = await alot
                .mapAsync(async x => ({ foo: x.num * 2 }))
                .maxItemAsync(x => x.foo);

            eq_(max.foo, 8);
        },
        'min' () {
            let arr = [
                { num: 2},
                { num: 23},
                { num: 4},
            ];
            let alot = new Alot(arr);
            let min = alot.minItem(x => x.num);
            eq_(min.num, 2);
        },
        async 'minAsync' () {
            let arr = [
                { num: 5},
                { num: 3},
                { num: 4},
            ];
            let alot = new Alot(arr);
            let max = await alot.mapAsync(async x => ({ foo: x.num * 2})).minItemAsync(x => x.foo);
            eq_(max.foo, 6);
        }
    },
})
