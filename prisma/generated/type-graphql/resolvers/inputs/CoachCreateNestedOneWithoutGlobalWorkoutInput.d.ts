import { CoachCreateOrConnectWithoutGlobalWorkoutInput } from "../inputs/CoachCreateOrConnectWithoutGlobalWorkoutInput";
import { CoachCreateWithoutGlobalWorkoutInput } from "../inputs/CoachCreateWithoutGlobalWorkoutInput";
import { CoachWhereUniqueInput } from "../inputs/CoachWhereUniqueInput";
export declare class CoachCreateNestedOneWithoutGlobalWorkoutInput {
    create?: CoachCreateWithoutGlobalWorkoutInput | undefined;
    connectOrCreate?: CoachCreateOrConnectWithoutGlobalWorkoutInput | undefined;
    connect?: CoachWhereUniqueInput | undefined;
}
