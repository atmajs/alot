import './streams/exports';

import { Classify } from './utils/classify';
import { Alot as AlotInner } from './alot'
import { AlotMeta } from './AlotMeta';

interface IAlotConstructor {
    new <T> (array: T[], meta?: AlotMeta): AlotInner<T>
    <T> (array: T[], meta?: AlotMeta): AlotInner<T>
}

@Classify
class Alot extends AlotInner{

    static default = AlotInner
    static Alot = AlotInner
}

// Reapply already decorated SQuery to default.
Alot.default = <IAlotConstructor> <any> Alot;
Alot.Alot = <IAlotConstructor> <any> AlotInner;

export = <IAlotConstructor> <any> Alot;

// @Classify
// export class Alot<T> extends AlotInner<T> {

//     static default = Alot as any as IAlotConstructor;
// }


// export default Alot as any as IAlotConstructor;