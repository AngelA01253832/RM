import { WorkoutToDoOrderByWithRelationInput } from "../../../inputs/WorkoutToDoOrderByWithRelationInput";
import { WorkoutToDoWhereInput } from "../../../inputs/WorkoutToDoWhereInput";
import { WorkoutToDoWhereUniqueInput } from "../../../inputs/WorkoutToDoWhereUniqueInput";
export declare class FindManyWorkoutToDoArgs {
    where?: WorkoutToDoWhereInput | undefined;
    orderBy?: WorkoutToDoOrderByWithRelationInput[] | undefined;
    cursor?: WorkoutToDoWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "date" | "goal" | "coachId" | "athleteId"> | undefined;
}
