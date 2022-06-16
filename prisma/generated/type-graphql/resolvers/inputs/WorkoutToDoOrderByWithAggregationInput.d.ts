import { WorkoutToDoCountOrderByAggregateInput } from "../inputs/WorkoutToDoCountOrderByAggregateInput";
import { WorkoutToDoMaxOrderByAggregateInput } from "../inputs/WorkoutToDoMaxOrderByAggregateInput";
import { WorkoutToDoMinOrderByAggregateInput } from "../inputs/WorkoutToDoMinOrderByAggregateInput";
export declare class WorkoutToDoOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    date?: "asc" | "desc" | undefined;
    goal?: "asc" | "desc" | undefined;
    coachId?: "asc" | "desc" | undefined;
    athleteId?: "asc" | "desc" | undefined;
    _count?: WorkoutToDoCountOrderByAggregateInput | undefined;
    _max?: WorkoutToDoMaxOrderByAggregateInput | undefined;
    _min?: WorkoutToDoMinOrderByAggregateInput | undefined;
}
