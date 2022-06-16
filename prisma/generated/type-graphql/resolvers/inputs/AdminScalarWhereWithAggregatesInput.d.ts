import { EnumEnum_GenderWithAggregatesFilter } from "../inputs/EnumEnum_GenderWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class AdminScalarWhereWithAggregatesInput {
    AND?: AdminScalarWhereWithAggregatesInput[] | undefined;
    OR?: AdminScalarWhereWithAggregatesInput[] | undefined;
    NOT?: AdminScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    lastname?: StringWithAggregatesFilter | undefined;
    schoolId?: StringWithAggregatesFilter | undefined;
    gender?: EnumEnum_GenderWithAggregatesFilter | undefined;
    userId?: StringWithAggregatesFilter | undefined;
}
