import { EnumEnum_GoalWithAggregatesFilter } from "../inputs/EnumEnum_GoalWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class GlobalWorkoutScalarWhereWithAggregatesInput {
    AND?: GlobalWorkoutScalarWhereWithAggregatesInput[] | undefined;
    OR?: GlobalWorkoutScalarWhereWithAggregatesInput[] | undefined;
    NOT?: GlobalWorkoutScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    indications?: StringWithAggregatesFilter | undefined;
    goal?: StringWithAggregatesFilter | undefined;
    goalvalue?: EnumEnum_GoalWithAggregatesFilter | undefined;
    coachId?: StringWithAggregatesFilter | undefined;
}
