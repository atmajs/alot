import './streams/exports';

import { Classify } from './utils/classify';
import { Alot as AlotInner } from './alot'
import { AlotMeta } from './AlotMeta';

@Classify
class Alot extends AlotInner {

    static default = AlotInner
    static Alot = AlotInner
}

// Reapply already decorated SQuery to default.
Alot.default = AlotInner;
Alot.Alot = AlotInner;

export = Alot;

// @Classify
// export class Alot<T> extends AlotInner<T> {

//     static default = Alot as any as IAlotConstructor;
// }


// export default Alot as any as IAlotConstructor;