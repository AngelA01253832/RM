import { Athlete } from "../../../models/Athlete";
import { Weight } from "../../../models/Weight";
export declare class WeightRelationsResolver {
    athlete(weight: Weight, ctx: any): Promise<Athlete>;
}
