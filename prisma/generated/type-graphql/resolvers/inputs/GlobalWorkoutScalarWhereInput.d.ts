import { EnumEnum_GoalFilter } from "../inputs/EnumEnum_GoalFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class GlobalWorkoutScalarWhereInput {
    AND?: GlobalWorkoutScalarWhereInput[] | undefined;
    OR?: GlobalWorkoutScalarWhereInput[] | undefined;
    NOT?: GlobalWorkoutScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    indications?: StringFilter | undefined;
    goal?: StringFilter | undefined;
    goalvalue?: EnumEnum_GoalFilter | undefined;
    coachId?: StringFilter | undefined;
}
