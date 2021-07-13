import { Alot } from '../src/alot';
import sinon = require('sinon');

UTest({
    'map and find' () {
        let arr = [1, 2, 3];
        let alot = new Alot(arr);

        let val = alot.map(x => x * 2).find(x => x > 3);
        eq_(val, 4);
    },
    async 'map and find async' () {
        let arr = [1, 2, 3];
        let alot = new Alot(arr);
        let mapCount = 0;

        let val = await alot.mapAsync(x => {
            // after map we pick the second item, so map should be called only twice.
            mapCount++;
            return Promise.resolve(x * 2)
        }).findAsync(x => x > 3);

        eq_(val, 4);
        eq_(mapCount, 2);
    }
})
