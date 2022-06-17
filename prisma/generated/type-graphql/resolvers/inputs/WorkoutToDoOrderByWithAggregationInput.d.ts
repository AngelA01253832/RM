import { WorkoutToDoAvgOrderByAggregateInput } from "../inputs/WorkoutToDoAvgOrderByAggregateInput";
import { WorkoutToDoCountOrderByAggregateInput } from "../inputs/WorkoutToDoCountOrderByAggregateInput";
import { WorkoutToDoMaxOrderByAggregateInput } from "../inputs/WorkoutToDoMaxOrderByAggregateInput";
import { WorkoutToDoMinOrderByAggregateInput } from "../inputs/WorkoutToDoMinOrderByAggregateInput";
import { WorkoutToDoSumOrderByAggregateInput } from "../inputs/WorkoutToDoSumOrderByAggregateInput";
export declare class WorkoutToDoOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    date?: "asc" | "desc" | undefined;
    indications?: "asc" | "desc" | undefined;
    goal?: "asc" | "desc" | undefined;
    goalvalue?: "asc" | "desc" | undefined;
    coachId?: "asc" | "desc" | undefined;
    athleteId?: "asc" | "desc" | undefined;
    _count?: WorkoutToDoCountOrderByAggregateInput | undefined;
    _avg?: WorkoutToDoAvgOrderByAggregateInput | undefined;
    _max?: WorkoutToDoMaxOrderByAggregateInput | undefined;
    _min?: WorkoutToDoMinOrderByAggregateInput | undefined;
    _sum?: WorkoutToDoSumOrderByAggregateInput | undefined;
}
