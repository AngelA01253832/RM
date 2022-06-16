import { AthleteRelationFilter } from "../inputs/AthleteRelationFilter";
import { CoachRelationFilter } from "../inputs/CoachRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumEnum_GoalFilter } from "../inputs/EnumEnum_GoalFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class WorkoutToDoWhereInput {
    AND?: WorkoutToDoWhereInput[] | undefined;
    OR?: WorkoutToDoWhereInput[] | undefined;
    NOT?: WorkoutToDoWhereInput[] | undefined;
    id?: StringFilter | undefined;
    coach?: CoachRelationFilter | undefined;
    athlete?: AthleteRelationFilter | undefined;
    date?: DateTimeFilter | undefined;
    goal?: EnumEnum_GoalFilter | undefined;
    coachId?: StringFilter | undefined;
    athleteId?: StringFilter | undefined;
}
