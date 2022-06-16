import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class WeightScalarWhereWithAggregatesInput {
    AND?: WeightScalarWhereWithAggregatesInput[] | undefined;
    OR?: WeightScalarWhereWithAggregatesInput[] | undefined;
    NOT?: WeightScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    weight?: FloatWithAggregatesFilter | undefined;
    date?: DateTimeWithAggregatesFilter | undefined;
    athleteId?: StringWithAggregatesFilter | undefined;
}
