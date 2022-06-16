import { WorkoutToDoCreateInput } from "../../../inputs/WorkoutToDoCreateInput";
import { WorkoutToDoUpdateInput } from "../../../inputs/WorkoutToDoUpdateInput";
import { WorkoutToDoWhereUniqueInput } from "../../../inputs/WorkoutToDoWhereUniqueInput";
export declare class UpsertWorkoutToDoArgs {
    where: WorkoutToDoWhereUniqueInput;
    create: WorkoutToDoCreateInput;
    update: WorkoutToDoUpdateInput;
}
