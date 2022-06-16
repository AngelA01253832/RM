import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class DoneWorkoutScalarWhereWithAggregatesInput {
    AND?: DoneWorkoutScalarWhereWithAggregatesInput[] | undefined;
    OR?: DoneWorkoutScalarWhereWithAggregatesInput[] | undefined;
    NOT?: DoneWorkoutScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    date?: DateTimeWithAggregatesFilter | undefined;
    calories?: IntWithAggregatesFilter | undefined;
    time?: IntWithAggregatesFilter | undefined;
    distance?: FloatWithAggregatesFilter | undefined;
    intensity?: IntWithAggregatesFilter | undefined;
    athleteId?: StringWithAggregatesFilter | undefined;
}
