import { WeightOrderByWithAggregationInput } from "../../../inputs/WeightOrderByWithAggregationInput";
import { WeightScalarWhereWithAggregatesInput } from "../../../inputs/WeightScalarWhereWithAggregatesInput";
import { WeightWhereInput } from "../../../inputs/WeightWhereInput";
export declare class GroupByWeightArgs {
    where?: WeightWhereInput | undefined;
    orderBy?: WeightOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "weight" | "date" | "athleteId">;
    having?: WeightScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
