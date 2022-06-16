import { AccountListRelationFilter } from "../inputs/AccountListRelationFilter";
import { AdminRelationFilter } from "../inputs/AdminRelationFilter";
import { AthleteRelationFilter } from "../inputs/AthleteRelationFilter";
import { CoachRelationFilter } from "../inputs/CoachRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { SessionListRelationFilter } from "../inputs/SessionListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class UserWhereInput {
    AND?: UserWhereInput[] | undefined;
    OR?: UserWhereInput[] | undefined;
    NOT?: UserWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringNullableFilter | undefined;
    email?: StringNullableFilter | undefined;
    emailVerified?: DateTimeNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
    accounts?: AccountListRelationFilter | undefined;
    sessions?: SessionListRelationFilter | undefined;
    Coach?: CoachRelationFilter | undefined;
    Athlete?: AthleteRelationFilter | undefined;
    Admin?: AdminRelationFilter | undefined;
}
