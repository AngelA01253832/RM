import { CoachCountOrderByAggregateInput } from "../inputs/CoachCountOrderByAggregateInput";
import { CoachMaxOrderByAggregateInput } from "../inputs/CoachMaxOrderByAggregateInput";
import { CoachMinOrderByAggregateInput } from "../inputs/CoachMinOrderByAggregateInput";
export declare class CoachOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    lastname?: "asc" | "desc" | undefined;
    schoolId?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    gender?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    _count?: CoachCountOrderByAggregateInput | undefined;
    _max?: CoachMaxOrderByAggregateInput | undefined;
    _min?: CoachMinOrderByAggregateInput | undefined;
}
