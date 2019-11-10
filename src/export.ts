import './streams/exports';

import { Classify } from './utils/classify';
import { Alot as AlotInner } from './alot'
import { AlotMeta } from './AlotMeta';

interface IAlotConstructor {
    new <T> (array: T[], meta?: AlotMeta): AlotInner<T>
    <T> (array: T[], meta?: AlotMeta): AlotInner<T>

    fromObject: typeof AlotInner.fromObject
}

@Classify
class Alot extends AlotInner{

    static default = AlotInner as IAlotConstructor
    static Alot = AlotInner as IAlotConstructor
}

// Reapply already decorated Alot to default.
Alot.default = <IAlotConstructor> <any> Alot;
Alot.Alot = <IAlotConstructor> <any> Alot;

export = <IAlotConstructor> <any> Alot;
