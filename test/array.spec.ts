import { Alot } from '../src/alot';
import sinon = require('sinon');

UTest({
    'filter' () {
        let arr = [1, 2, 3];
        let alot = new Alot(arr);

        deepEq_(alot.filter(x => x > 1).toArray(), [2, 3]);
    },
    async 'filterAsync' () {
        let arr = [1, 2, 3];
        let alot = new Alot(arr);

        let result = await alot.filterAsync(async x => x > 1).toArrayAsync();
        deepEq_(result, [2, 3]);
    },
    'filter and take first: ensure is lazy' () {
        let arr = [
            {
                check: sinon.spy(() => 1)
            },
            {
                check: sinon.spy(() => 2)
            },
            {
                check: sinon.spy(() => 3)
            }
        ];
        let alot = new Alot(arr);
        let x = alot.filter(x => x.check() > 1).first();
        eq_(x, arr[1]);

        deepEq_(arr[0].check.callCount, 1);
        deepEq_(arr[1].check.callCount, 1);
        deepEq_(arr[2].check.callCount, 0);
    },
    'map' () {
        let arr = [ 1, 2, 3, 4];
        let alot = new Alot(arr);
        let result = alot.map(x => x * 2).toArray();

        deepEq_(result, [2,4,6,8]);
    },
    async 'mapAsync' () {
        let arr = [ 1, 2, 3, 4];
        let alot = new Alot(arr);
        let result = await alot
            .mapAsync(async x => x * 2)
            .toArrayAsync();

            deepEq_(result, [2,4,6,8]);
    },
    'mapMany' () {
        let arr = [ [1, 2], [3, 4]];
        let alot = new Alot(arr);
        let result = alot.mapMany(x => x).toArray();

        deepEq_(result, [1,2,3,4]);
    },
    async 'mapManyAsync' () {
        let arr = [ [1, 2], [3, 4]];
        let alot = new Alot(arr);
        let result = await alot
            .mapManyAsync(x => Promise.resolve(x))
            .toArrayAsync();

        deepEq_(result, [1,2,3,4]);
    },

    'skip and take' () {
        let arr = [ 1, 2, 3, 4 ];
        let alot = new Alot(arr);
        let result = alot.skip(1).take(2).toArray();

        deepEq_(result, [2,3]);
    },

    'filter async -> skip -> take': {
        'sync' () {
            let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
            let alot = new Alot(arr);
            let result = alot
                .filter(x => x % 3 === 0)
                .skip(1)
                .take(2)
                .toArray();

            deepEq_(result, [6,9]);
        },
        async 'async' () {
            let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
            let alot = new Alot(arr);
            let result = await alot
                .filterAsync(async x => x % 3 === 0)
                .skip(1)
                .take(2)
                .toArrayAsync();

            deepEq_(result, [6,9]);
        }
    }
})