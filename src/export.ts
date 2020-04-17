import './streams/exports';

import { Classify } from './utils/classify';
import { Alot as AlotInner } from './alot'
import { AlotMeta } from './AlotMeta';

interface IAlotConstructor {
    new <T> (array: T[], meta?: AlotMeta): AlotInner<T>
    <T> (array: T[], meta?: AlotMeta): AlotInner<T>

    default: IAlotConstructor
    fromObject: typeof AlotInner.fromObject
}

@Classify
class Alot extends AlotInner {
    static Alot = AlotInner as IAlotConstructor
    static default = AlotInner as IAlotConstructor
}

// Reapply already decorated Alot to default.
Alot.default = <IAlotConstructor> <any> Alot;
Alot.Alot = <IAlotConstructor> <any> Alot;

const alot: IAlotConstructor = <any> Alot;
export = alot;
