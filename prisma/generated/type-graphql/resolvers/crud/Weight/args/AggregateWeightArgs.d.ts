import { WeightOrderByWithRelationInput } from "../../../inputs/WeightOrderByWithRelationInput";
import { WeightWhereInput } from "../../../inputs/WeightWhereInput";
import { WeightWhereUniqueInput } from "../../../inputs/WeightWhereUniqueInput";
export declare class AggregateWeightArgs {
    where?: WeightWhereInput | undefined;
    orderBy?: WeightOrderByWithRelationInput[] | undefined;
    cursor?: WeightWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
