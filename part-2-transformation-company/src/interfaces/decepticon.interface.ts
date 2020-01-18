import { Transformer } from "./transformer.interface";
import { Allegiances } from './allegiances.enum'

export interface Decepticon extends Transformer {
    allegiance: Allegiances.DECEPTICONS
}