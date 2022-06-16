import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumEnum_GoalWithAggregatesFilter } from "../inputs/EnumEnum_GoalWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class WorkoutToDoScalarWhereWithAggregatesInput {
    AND?: WorkoutToDoScalarWhereWithAggregatesInput[] | undefined;
    OR?: WorkoutToDoScalarWhereWithAggregatesInput[] | undefined;
    NOT?: WorkoutToDoScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    date?: DateTimeWithAggregatesFilter | undefined;
    goal?: EnumEnum_GoalWithAggregatesFilter | undefined;
    coachId?: StringWithAggregatesFilter | undefined;
    athleteId?: StringWithAggregatesFilter | undefined;
}
