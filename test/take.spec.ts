import { Alot } from '../src/alot';
import sinon = require('sinon');

UTest({
    'takeWhile' () {
        let arr = [1, 2, 3];
        let alot = new Alot(arr);

        deepEq_(alot.takeWhile(x => x < 3).toArray(), [1, 2]);
    },
    async 'takeWhileAsync' () {
        let arr = [1, 2, 3, 4];
        let alot = new Alot(arr);

        let callCount = 0;
        let result = await alot
            .mapAsync(x => {
                callCount++;
                return Promise.resolve(x * 2)
            })
            .takeWhileAsync(async x => x < 6)
            .toArrayAsync();

        deepEq_(result, [2, 4]);
        eq_(callCount, 3, `Stream should be interrupted when x < 6 occures`);
    },

    'skipWhile' () {
        let arr = [1, 2, 3];
        let alot = new Alot(arr);

        deepEq_(alot.skipWhile(x => x < 2).toArray(), [2, 3]);
    },
    async 'skipWhileAsync' () {
        let arr = [1, 2, 3, 4];
        let alot = new Alot(arr);

        let callCount = 0;
        let result = await alot
            .mapAsync(x => {
                callCount++;
                return Promise.resolve(x * 2)
            })
            .skipWhileAsync(async x => x < 4)
            .toArrayAsync();

        deepEq_(result, [4, 6, 8]);
        eq_(callCount, arr.length);
    },
    async 'skipWhile + takeWhile Async' () {
        let arr = [1, 2, 3, 4, 5, 6];
        let alot = new Alot(arr);

        let callCount = 0;
        let result = await alot
            .mapAsync(x => {
                callCount++;
                return Promise.resolve(x * 2)
            })
            .skipWhileAsync(async x => x < 4)
            .takeWhileAsync(async x => x < 10)
            .toArrayAsync();

        deepEq_(result, [4, 6, 8]);
        eq_(callCount, arr.length - 1);
    },
})
