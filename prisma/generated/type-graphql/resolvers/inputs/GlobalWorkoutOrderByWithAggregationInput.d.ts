import { GlobalWorkoutCountOrderByAggregateInput } from "../inputs/GlobalWorkoutCountOrderByAggregateInput";
import { GlobalWorkoutMaxOrderByAggregateInput } from "../inputs/GlobalWorkoutMaxOrderByAggregateInput";
import { GlobalWorkoutMinOrderByAggregateInput } from "../inputs/GlobalWorkoutMinOrderByAggregateInput";
export declare class GlobalWorkoutOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    indications?: "asc" | "desc" | undefined;
    goal?: "asc" | "desc" | undefined;
    goalvalue?: "asc" | "desc" | undefined;
    coachId?: "asc" | "desc" | undefined;
    _count?: GlobalWorkoutCountOrderByAggregateInput | undefined;
    _max?: GlobalWorkoutMaxOrderByAggregateInput | undefined;
    _min?: GlobalWorkoutMinOrderByAggregateInput | undefined;
}
