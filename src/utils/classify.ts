function Classify (Ctor) {
    
    const Class: typeof Ctor =  function (...args) {
        return new Ctor(...args);
    }
    Class.prototype = Ctor.prototype;

    forIn(Ctor, key => {
        if (key in Class === false) {
            Class[key] = Ctor[key];
        }
    });    
    return Class;    
}

function FnPrototypeAlias (Ctor) {
    Ctor.fn = Ctor.prototype;
    return Ctor;    
}


export { Classify, FnPrototypeAlias };


function forIn(obj: any, cb: (key: string) => void){
    let hash = Object.create(null);
    let cursor = obj;
    do{
        let props = Object.getOwnPropertyNames(cursor);
        for (let i = 0; i < props.length; i++) {
            let key = props[i];
            if (key in hash === false) {
                cb(key);
            }
            hash[key] = null;
        }        
    }
    while (cursor = Object.getPrototypeOf(cursor));
}