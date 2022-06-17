import { CoachCreateOrConnectWithoutGlobalWorkoutInput } from "../inputs/CoachCreateOrConnectWithoutGlobalWorkoutInput";
import { CoachCreateWithoutGlobalWorkoutInput } from "../inputs/CoachCreateWithoutGlobalWorkoutInput";
import { CoachUpdateWithoutGlobalWorkoutInput } from "../inputs/CoachUpdateWithoutGlobalWorkoutInput";
import { CoachUpsertWithoutGlobalWorkoutInput } from "../inputs/CoachUpsertWithoutGlobalWorkoutInput";
import { CoachWhereUniqueInput } from "../inputs/CoachWhereUniqueInput";
export declare class CoachUpdateOneRequiredWithoutGlobalWorkoutInput {
    create?: CoachCreateWithoutGlobalWorkoutInput | undefined;
    connectOrCreate?: CoachCreateOrConnectWithoutGlobalWorkoutInput | undefined;
    upsert?: CoachUpsertWithoutGlobalWorkoutInput | undefined;
    connect?: CoachWhereUniqueInput | undefined;
    update?: CoachUpdateWithoutGlobalWorkoutInput | undefined;
}
