import { CoachCreateOrConnectWithoutWorkoutToDoInput } from "../inputs/CoachCreateOrConnectWithoutWorkoutToDoInput";
import { CoachCreateWithoutWorkoutToDoInput } from "../inputs/CoachCreateWithoutWorkoutToDoInput";
import { CoachWhereUniqueInput } from "../inputs/CoachWhereUniqueInput";
export declare class CoachCreateNestedOneWithoutWorkoutToDoInput {
    create?: CoachCreateWithoutWorkoutToDoInput | undefined;
    connectOrCreate?: CoachCreateOrConnectWithoutWorkoutToDoInput | undefined;
    connect?: CoachWhereUniqueInput | undefined;
}
