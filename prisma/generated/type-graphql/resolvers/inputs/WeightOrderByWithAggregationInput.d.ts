import { WeightAvgOrderByAggregateInput } from "../inputs/WeightAvgOrderByAggregateInput";
import { WeightCountOrderByAggregateInput } from "../inputs/WeightCountOrderByAggregateInput";
import { WeightMaxOrderByAggregateInput } from "../inputs/WeightMaxOrderByAggregateInput";
import { WeightMinOrderByAggregateInput } from "../inputs/WeightMinOrderByAggregateInput";
import { WeightSumOrderByAggregateInput } from "../inputs/WeightSumOrderByAggregateInput";
export declare class WeightOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    weight?: "asc" | "desc" | undefined;
    date?: "asc" | "desc" | undefined;
    athleteId?: "asc" | "desc" | undefined;
    _count?: WeightCountOrderByAggregateInput | undefined;
    _avg?: WeightAvgOrderByAggregateInput | undefined;
    _max?: WeightMaxOrderByAggregateInput | undefined;
    _min?: WeightMinOrderByAggregateInput | undefined;
    _sum?: WeightSumOrderByAggregateInput | undefined;
}
