import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumEnum_GoalFilter } from "../inputs/EnumEnum_GoalFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class WorkoutToDoScalarWhereInput {
    AND?: WorkoutToDoScalarWhereInput[] | undefined;
    OR?: WorkoutToDoScalarWhereInput[] | undefined;
    NOT?: WorkoutToDoScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    date?: DateTimeFilter | undefined;
    goal?: EnumEnum_GoalFilter | undefined;
    coachId?: StringFilter | undefined;
    athleteId?: StringFilter | undefined;
}
