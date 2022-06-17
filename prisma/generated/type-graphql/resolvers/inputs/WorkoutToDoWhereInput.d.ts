import { AthleteRelationFilter } from "../inputs/AthleteRelationFilter";
import { CoachRelationFilter } from "../inputs/CoachRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumEnum_GoalFilter } from "../inputs/EnumEnum_GoalFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class WorkoutToDoWhereInput {
    AND?: WorkoutToDoWhereInput[] | undefined;
    OR?: WorkoutToDoWhereInput[] | undefined;
    NOT?: WorkoutToDoWhereInput[] | undefined;
    id?: StringFilter | undefined;
    coach?: CoachRelationFilter | undefined;
    athlete?: AthleteRelationFilter | undefined;
    date?: DateTimeFilter | undefined;
    indications?: StringFilter | undefined;
    goal?: EnumEnum_GoalFilter | undefined;
    goalvalue?: IntFilter | undefined;
    coachId?: StringFilter | undefined;
    athleteId?: StringFilter | undefined;
}
