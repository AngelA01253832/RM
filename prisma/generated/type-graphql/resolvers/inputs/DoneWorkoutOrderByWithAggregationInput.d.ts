import { DoneWorkoutAvgOrderByAggregateInput } from "../inputs/DoneWorkoutAvgOrderByAggregateInput";
import { DoneWorkoutCountOrderByAggregateInput } from "../inputs/DoneWorkoutCountOrderByAggregateInput";
import { DoneWorkoutMaxOrderByAggregateInput } from "../inputs/DoneWorkoutMaxOrderByAggregateInput";
import { DoneWorkoutMinOrderByAggregateInput } from "../inputs/DoneWorkoutMinOrderByAggregateInput";
import { DoneWorkoutSumOrderByAggregateInput } from "../inputs/DoneWorkoutSumOrderByAggregateInput";
export declare class DoneWorkoutOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    date?: "asc" | "desc" | undefined;
    calories?: "asc" | "desc" | undefined;
    time?: "asc" | "desc" | undefined;
    distance?: "asc" | "desc" | undefined;
    intensity?: "asc" | "desc" | undefined;
    athleteId?: "asc" | "desc" | undefined;
    _count?: DoneWorkoutCountOrderByAggregateInput | undefined;
    _avg?: DoneWorkoutAvgOrderByAggregateInput | undefined;
    _max?: DoneWorkoutMaxOrderByAggregateInput | undefined;
    _min?: DoneWorkoutMinOrderByAggregateInput | undefined;
    _sum?: DoneWorkoutSumOrderByAggregateInput | undefined;
}
