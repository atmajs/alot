import { Alot } from '../src/alot';
import sinon = require('sinon');

UTest({
    'filter' () {
        let arr = [1, 2, 3];
        let alot = new Alot(arr);
        let out = [];

        for (let i of alot) {
            out.push(i);
        }
        deepEq_(arr, out);
    },
});
