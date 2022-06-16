import { AthleteRelationFilter } from "../inputs/AthleteRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class DoneWorkoutWhereInput {
    AND?: DoneWorkoutWhereInput[] | undefined;
    OR?: DoneWorkoutWhereInput[] | undefined;
    NOT?: DoneWorkoutWhereInput[] | undefined;
    id?: StringFilter | undefined;
    athlete?: AthleteRelationFilter | undefined;
    date?: DateTimeFilter | undefined;
    calories?: IntFilter | undefined;
    time?: IntFilter | undefined;
    distance?: FloatFilter | undefined;
    intensity?: IntFilter | undefined;
    athleteId?: StringFilter | undefined;
}
