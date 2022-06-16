import { DoneWorkoutOrderByWithAggregationInput } from "../../../inputs/DoneWorkoutOrderByWithAggregationInput";
import { DoneWorkoutScalarWhereWithAggregatesInput } from "../../../inputs/DoneWorkoutScalarWhereWithAggregatesInput";
import { DoneWorkoutWhereInput } from "../../../inputs/DoneWorkoutWhereInput";
export declare class GroupByDoneWorkoutArgs {
    where?: DoneWorkoutWhereInput | undefined;
    orderBy?: DoneWorkoutOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "date" | "calories" | "time" | "distance" | "intensity" | "athleteId">;
    having?: DoneWorkoutScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
