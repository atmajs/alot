import { Alot } from '../src/alot';

UTest({
    'join inner' () {
        let outer = [
            {id: 'foo-x'}, 
            {id: 'bar', outerLetter: 'a'}, 
            {id: 'qux-x'}, 
        ]
        let inner = [
            {id: 'foo'}, 
            {id: 'bar', innerLetter: 'b'}, 
            {id: 'qux'}, 
        ];
        
        let alot = new Alot(outer);
        let arr = alot.join(inner, x => x.id, x => x.id, (a, b) => `${a.outerLetter}${b.innerLetter}`).toArray();
        
        eq_(arr.length, 1)
        deepEq_(arr, [ 'ab' ]);
    },
    'join outer' () {
        let outer = [
            {id: 'foo-x'}, 
            {id: 'bar', outerLetter: 'a'}, 
            {id: 'qux-x'}, 
        ]
        let inner = [
            {id: 'foo'}, 
            {id: 'bar', innerLetter: 'b'}, 
            {id: 'qux'}, 
        ];
        
        let alot = new Alot(outer);
        let arr = alot.joinOuter(inner, x => x.id, x => x.id, (a, b) => a ?? b).toArray();
        
        eq_(arr.length, 5)
        deepEq_(arr, [
            {id: 'foo-x'}, 
            {id: 'bar', outerLetter: 'a'}, 
            {id: 'qux-x'}, 
            {id: 'foo'}, 
            {id: 'qux'}, 
        ]);
    }
})