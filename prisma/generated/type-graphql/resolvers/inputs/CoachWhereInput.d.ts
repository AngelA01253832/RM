import { EnumEnum_GenderFilter } from "../inputs/EnumEnum_GenderFilter";
import { EnumEnum_StatusFilter } from "../inputs/EnumEnum_StatusFilter";
import { GlobalWorkoutListRelationFilter } from "../inputs/GlobalWorkoutListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
import { WorkoutToDoListRelationFilter } from "../inputs/WorkoutToDoListRelationFilter";
export declare class CoachWhereInput {
    AND?: CoachWhereInput[] | undefined;
    OR?: CoachWhereInput[] | undefined;
    NOT?: CoachWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    lastname?: StringFilter | undefined;
    schoolId?: StringFilter | undefined;
    description?: StringFilter | undefined;
    scheduler?: StringFilter | undefined;
    KnowTrainer?: StringFilter | undefined;
    gender?: EnumEnum_GenderFilter | undefined;
    status?: EnumEnum_StatusFilter | undefined;
    user?: UserRelationFilter | undefined;
    userId?: StringFilter | undefined;
    WorkoutToDo?: WorkoutToDoListRelationFilter | undefined;
    GlobalWorkout?: GlobalWorkoutListRelationFilter | undefined;
}
