import { CoachRelationFilter } from "../inputs/CoachRelationFilter";
import { EnumEnum_GoalFilter } from "../inputs/EnumEnum_GoalFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class GlobalWorkoutWhereInput {
    AND?: GlobalWorkoutWhereInput[] | undefined;
    OR?: GlobalWorkoutWhereInput[] | undefined;
    NOT?: GlobalWorkoutWhereInput[] | undefined;
    id?: StringFilter | undefined;
    coach?: CoachRelationFilter | undefined;
    indications?: StringFilter | undefined;
    goal?: StringFilter | undefined;
    goalvalue?: EnumEnum_GoalFilter | undefined;
    coachId?: StringFilter | undefined;
}
