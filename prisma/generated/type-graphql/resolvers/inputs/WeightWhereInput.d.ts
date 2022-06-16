import { AthleteRelationFilter } from "../inputs/AthleteRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class WeightWhereInput {
    AND?: WeightWhereInput[] | undefined;
    OR?: WeightWhereInput[] | undefined;
    NOT?: WeightWhereInput[] | undefined;
    id?: StringFilter | undefined;
    weight?: FloatFilter | undefined;
    athlete?: AthleteRelationFilter | undefined;
    date?: DateTimeFilter | undefined;
    athleteId?: StringFilter | undefined;
}
