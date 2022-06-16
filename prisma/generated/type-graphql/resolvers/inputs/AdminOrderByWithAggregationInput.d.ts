import { AdminCountOrderByAggregateInput } from "../inputs/AdminCountOrderByAggregateInput";
import { AdminMaxOrderByAggregateInput } from "../inputs/AdminMaxOrderByAggregateInput";
import { AdminMinOrderByAggregateInput } from "../inputs/AdminMinOrderByAggregateInput";
export declare class AdminOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    lastname?: "asc" | "desc" | undefined;
    schoolId?: "asc" | "desc" | undefined;
    gender?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    _count?: AdminCountOrderByAggregateInput | undefined;
    _max?: AdminMaxOrderByAggregateInput | undefined;
    _min?: AdminMinOrderByAggregateInput | undefined;
}
