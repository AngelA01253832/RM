import { WeightCreateInput } from "../../../inputs/WeightCreateInput";
import { WeightUpdateInput } from "../../../inputs/WeightUpdateInput";
import { WeightWhereUniqueInput } from "../../../inputs/WeightWhereUniqueInput";
export declare class UpsertWeightArgs {
    where: WeightWhereUniqueInput;
    create: WeightCreateInput;
    update: WeightUpdateInput;
}
