import { EnumEnum_GenderWithAggregatesFilter } from "../inputs/EnumEnum_GenderWithAggregatesFilter";
import { EnumEnum_StatusWithAggregatesFilter } from "../inputs/EnumEnum_StatusWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class CoachScalarWhereWithAggregatesInput {
    AND?: CoachScalarWhereWithAggregatesInput[] | undefined;
    OR?: CoachScalarWhereWithAggregatesInput[] | undefined;
    NOT?: CoachScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    lastname?: StringWithAggregatesFilter | undefined;
    schoolId?: StringWithAggregatesFilter | undefined;
    description?: StringWithAggregatesFilter | undefined;
    gender?: EnumEnum_GenderWithAggregatesFilter | undefined;
    status?: EnumEnum_StatusWithAggregatesFilter | undefined;
    userId?: StringWithAggregatesFilter | undefined;
}
