import { GlobalWorkoutOrderByRelationAggregateInput } from "../inputs/GlobalWorkoutOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { WorkoutToDoOrderByRelationAggregateInput } from "../inputs/WorkoutToDoOrderByRelationAggregateInput";
export declare class CoachOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    lastname?: "asc" | "desc" | undefined;
    schoolId?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    scheduler?: "asc" | "desc" | undefined;
    KnowTrainer?: "asc" | "desc" | undefined;
    gender?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    user?: UserOrderByWithRelationInput | undefined;
    userId?: "asc" | "desc" | undefined;
    WorkoutToDo?: WorkoutToDoOrderByRelationAggregateInput | undefined;
    GlobalWorkout?: GlobalWorkoutOrderByRelationAggregateInput | undefined;
}
