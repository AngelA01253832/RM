import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumEnum_GoalWithAggregatesFilter } from "../inputs/EnumEnum_GoalWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class WorkoutToDoScalarWhereWithAggregatesInput {
    AND?: WorkoutToDoScalarWhereWithAggregatesInput[] | undefined;
    OR?: WorkoutToDoScalarWhereWithAggregatesInput[] | undefined;
    NOT?: WorkoutToDoScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    date?: DateTimeWithAggregatesFilter | undefined;
    indications?: StringWithAggregatesFilter | undefined;
    goal?: EnumEnum_GoalWithAggregatesFilter | undefined;
    goalvalue?: IntWithAggregatesFilter | undefined;
    coachId?: StringWithAggregatesFilter | undefined;
    athleteId?: StringWithAggregatesFilter | undefined;
}
