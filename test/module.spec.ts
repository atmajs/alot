UTest({
    'should load as commonjs' () {
        let Alot = (global as any).require('../lib/alot');
        is_(Alot, Function);
        eq_(Alot, Alot.Alot);
        
        let arr = Alot([1,2]).map(x => x * 3).toArray();
        deepEq_(arr, [ 3, 6 ]);
    }
})