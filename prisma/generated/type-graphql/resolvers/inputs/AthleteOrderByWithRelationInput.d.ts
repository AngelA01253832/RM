import { DoneWorkoutOrderByRelationAggregateInput } from "../inputs/DoneWorkoutOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { WeightOrderByRelationAggregateInput } from "../inputs/WeightOrderByRelationAggregateInput";
import { WorkoutToDoOrderByRelationAggregateInput } from "../inputs/WorkoutToDoOrderByRelationAggregateInput";
export declare class AthleteOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    lastname?: "asc" | "desc" | undefined;
    schoolId?: "asc" | "desc" | undefined;
    gender?: "asc" | "desc" | undefined;
    height?: "asc" | "desc" | undefined;
    user?: UserOrderByWithRelationInput | undefined;
    Weights?: WeightOrderByRelationAggregateInput | undefined;
    DoneWorkouts?: DoneWorkoutOrderByRelationAggregateInput | undefined;
    WorkoutstToDo?: WorkoutToDoOrderByRelationAggregateInput | undefined;
    userId?: "asc" | "desc" | undefined;
}
