import { EnumEnum_GenderFilter } from "../inputs/EnumEnum_GenderFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class AdminWhereInput {
    AND?: AdminWhereInput[] | undefined;
    OR?: AdminWhereInput[] | undefined;
    NOT?: AdminWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    lastname?: StringFilter | undefined;
    schoolId?: StringFilter | undefined;
    user?: UserRelationFilter | undefined;
    gender?: EnumEnum_GenderFilter | undefined;
    userId?: StringFilter | undefined;
}
