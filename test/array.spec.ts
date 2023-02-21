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
        let callCount = 0;
        let result = await alot
            .filterAsync(async x => {
                callCount++;
                return x > 1;
            })
            .toArrayAsync();
        deepEq_(result, [2, 3]);
        eq_(callCount, arr.length);
    },
    async 'filterAsync and take firstAsync' () {

        // never resolve some to check if this doesn't block further loops
        new Alot([1])
            .mapAsync(x => new Promise(r => {}))
            .toArrayAsync();

        new Alot([1])
            .filterAsync(x => new Promise(r => {}))
            .toArrayAsync();

        new Alot([1])
            .mapAsync(x => Promise.resolve(2))
            .filterAsync(x => new Promise(r => {}))
            .firstAsync();

        new Alot([1])
            .mapAsync(x => Promise.resolve(2))
            .filterAsync(x => x > 0)
            .firstAsync(x => new Promise(r => {}));

        let arr = [1, 2, 3]
        let el = await new Alot(arr)
            .mapAsync(x => Promise.resolve(x))
            .filterAsync(x => typeof x === 'number')
            .firstAsync(x => x > 1);
        eq_(el, 2);

        let noEl1 = await new Alot(arr)
            .mapAsync(async x => await Promise.resolve(x))
            .filterAsync(x => x > 5)
            .firstAsync();

        eq_(noEl1, null);

        let noEl2 = await new Alot(arr)
            .mapAsync(async x => await Promise.resolve(x))
            .filterAsync(x => x > 5)
            .firstAsync(x => x > 5);

        eq_(noEl2, null);

        let deepEls = await new Alot([ 2, 3, 4 ])
            .mapAsync(async x => {

                let arr = Alot.fromRange(0, x).toArray();

                return new Alot(arr)
                    .mapAsync(async x => await Promise.resolve(x % 2 === 0? [] : [x]))
                    .filterAsync(x => x.length > 0)
                    .firstAsync();
            })
            .toArrayAsync();


        deepEq_(deepEls, [ [1], [1], [1] ]);
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
    async 'mapManyAsync throwing' () {
        let arr = [ [1, 2], [3, 4]];
        let alot = new Alot(arr);
        let error;
        try {
            await alot
                .mapManyAsync(async x => {
                    throw new Error(`iError`)
                })
                .toArrayAsync();
        } catch (err) {
            error = err;
        }
        eq_(error?.message, 'iError');
    },

    'skip and take' () {
        let arr = [ 1, 2, 3, 4 ];
        let alot = new Alot(arr);
        let result = alot.skip(1).take(2).toArray();

        deepEq_(result, [2,3]);
    },

    'filter async - skip - take': {
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
