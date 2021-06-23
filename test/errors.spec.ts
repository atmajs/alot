import { Alot } from '../src/alot';
import sinon = require('sinon');

UTest({
    async 'throw error' () {
        let arr = [
            null
        ];
        try {
            await new Alot(arr)
                .mapAsync(async x => {
                    return await x.willThrow();
                })
                .toArrayAsync();

            eq_(true, false);
        } catch (error) {
            has_(error.message, 'willThrow');
        }
    },
    async 'include error' () {
        let arr = [
            null
        ];
        let result = await new Alot(arr)
            .mapAsync(async x => {
                return await x.willThrow();
            })
            .toArrayAsync({ errors: 'include' });

        is_(result[0], Error);
        has_(result[0].message, 'willThrow');
    },
    async 'ignore error' () {
        let arr = [
            null,
            { willThrow () { return 'not-this'} },
        ];
        let result = await new Alot(arr)
            .mapAsync(async x => {
                return await x.willThrow();
            })
            .toArrayAsync({ errors: 'ignore' });

        eq_(result.length, 2);
        eq_(result[0], null);
        eq_(result[1], 'not-this');
    }
})
