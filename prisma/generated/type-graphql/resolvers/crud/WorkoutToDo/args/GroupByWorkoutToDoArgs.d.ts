import { WorkoutToDoOrderByWithAggregationInput } from "../../../inputs/WorkoutToDoOrderByWithAggregationInput";
import { WorkoutToDoScalarWhereWithAggregatesInput } from "../../../inputs/WorkoutToDoScalarWhereWithAggregatesInput";
import { WorkoutToDoWhereInput } from "../../../inputs/WorkoutToDoWhereInput";
export declare class GroupByWorkoutToDoArgs {
    where?: WorkoutToDoWhereInput | undefined;
    orderBy?: WorkoutToDoOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "date" | "indications" | "goal" | "goalvalue" | "coachId" | "athleteId">;
    having?: WorkoutToDoScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
