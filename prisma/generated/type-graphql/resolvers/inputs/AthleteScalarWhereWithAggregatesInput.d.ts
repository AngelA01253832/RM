import { EnumEnum_GenderWithAggregatesFilter } from "../inputs/EnumEnum_GenderWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class AthleteScalarWhereWithAggregatesInput {
    AND?: AthleteScalarWhereWithAggregatesInput[] | undefined;
    OR?: AthleteScalarWhereWithAggregatesInput[] | undefined;
    NOT?: AthleteScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    lastname?: StringWithAggregatesFilter | undefined;
    schoolId?: StringWithAggregatesFilter | undefined;
    gender?: EnumEnum_GenderWithAggregatesFilter | undefined;
    height?: IntWithAggregatesFilter | undefined;
    userId?: StringWithAggregatesFilter | undefined;
}
