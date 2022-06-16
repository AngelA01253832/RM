import { AthleteAvgOrderByAggregateInput } from "../inputs/AthleteAvgOrderByAggregateInput";
import { AthleteCountOrderByAggregateInput } from "../inputs/AthleteCountOrderByAggregateInput";
import { AthleteMaxOrderByAggregateInput } from "../inputs/AthleteMaxOrderByAggregateInput";
import { AthleteMinOrderByAggregateInput } from "../inputs/AthleteMinOrderByAggregateInput";
import { AthleteSumOrderByAggregateInput } from "../inputs/AthleteSumOrderByAggregateInput";
export declare class AthleteOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    lastname?: "asc" | "desc" | undefined;
    schoolId?: "asc" | "desc" | undefined;
    gender?: "asc" | "desc" | undefined;
    height?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    _count?: AthleteCountOrderByAggregateInput | undefined;
    _avg?: AthleteAvgOrderByAggregateInput | undefined;
    _max?: AthleteMaxOrderByAggregateInput | undefined;
    _min?: AthleteMinOrderByAggregateInput | undefined;
    _sum?: AthleteSumOrderByAggregateInput | undefined;
}
