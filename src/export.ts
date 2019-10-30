import './streams/exports';

import { Classify } from './utils/classify';
import { Alot as AlotInner } from './alot'
import { AlotMeta } from './AlotMeta';


interface IAlotConstructor {
    new <T> (array: T[], meta?: AlotMeta): AlotInner<T>
    <T> (array: T[], meta?: AlotMeta): AlotInner<T>
}

@Classify
export class Alot<T> extends AlotInner<T> {

    static default = Alot as any as IAlotConstructor;
}


export default Alot as any as IAlotConstructor;