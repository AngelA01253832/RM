import { GlobalWorkoutOrderByWithAggregationInput } from "../../../inputs/GlobalWorkoutOrderByWithAggregationInput";
import { GlobalWorkoutScalarWhereWithAggregatesInput } from "../../../inputs/GlobalWorkoutScalarWhereWithAggregatesInput";
import { GlobalWorkoutWhereInput } from "../../../inputs/GlobalWorkoutWhereInput";
export declare class GroupByGlobalWorkoutArgs {
    where?: GlobalWorkoutWhereInput | undefined;
    orderBy?: GlobalWorkoutOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "indications" | "goal" | "goalvalue" | "coachId">;
    having?: GlobalWorkoutScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
