import { DoneWorkoutListRelationFilter } from "../inputs/DoneWorkoutListRelationFilter";
import { EnumEnum_GenderFilter } from "../inputs/EnumEnum_GenderFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
import { WeightListRelationFilter } from "../inputs/WeightListRelationFilter";
import { WorkoutToDoListRelationFilter } from "../inputs/WorkoutToDoListRelationFilter";
export declare class AthleteWhereInput {
    AND?: AthleteWhereInput[] | undefined;
    OR?: AthleteWhereInput[] | undefined;
    NOT?: AthleteWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    lastname?: StringFilter | undefined;
    schoolId?: StringFilter | undefined;
    gender?: EnumEnum_GenderFilter | undefined;
    height?: IntFilter | undefined;
    user?: UserRelationFilter | undefined;
    Weights?: WeightListRelationFilter | undefined;
    DoneWorkouts?: DoneWorkoutListRelationFilter | undefined;
    WorkoutstToDo?: WorkoutToDoListRelationFilter | undefined;
    userId?: StringFilter | undefined;
}
