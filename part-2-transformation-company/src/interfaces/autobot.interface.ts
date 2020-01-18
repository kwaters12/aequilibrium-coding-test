import { Transformer } from "./transformer.interface";
import { Allegiances } from './allegiances.enum'

export interface Autobot extends Transformer {
    allegiance: Allegiances.AUTOBOTS
}