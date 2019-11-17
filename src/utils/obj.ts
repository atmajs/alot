export function obj_getProperty (obj_: any, path: string) {
    if (obj_ == null) {
        return null;
    }
    if (path.indexOf('.') === -1) {
        return obj_[path];
    }
    let obj = obj_;
    let chain = path.split('.');
    let imax = chain.length;
    let i = -1;
    while ( obj != null && ++i < imax ) {
        let key = chain[i];
        obj = obj[key];
    }
    return obj;
}