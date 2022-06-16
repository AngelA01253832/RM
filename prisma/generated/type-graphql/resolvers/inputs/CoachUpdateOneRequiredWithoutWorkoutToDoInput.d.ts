import { CoachCreateOrConnectWithoutWorkoutToDoInput } from "../inputs/CoachCreateOrConnectWithoutWorkoutToDoInput";
import { CoachCreateWithoutWorkoutToDoInput } from "../inputs/CoachCreateWithoutWorkoutToDoInput";
import { CoachUpdateWithoutWorkoutToDoInput } from "../inputs/CoachUpdateWithoutWorkoutToDoInput";
import { CoachUpsertWithoutWorkoutToDoInput } from "../inputs/CoachUpsertWithoutWorkoutToDoInput";
import { CoachWhereUniqueInput } from "../inputs/CoachWhereUniqueInput";
export declare class CoachUpdateOneRequiredWithoutWorkoutToDoInput {
    create?: CoachCreateWithoutWorkoutToDoInput | undefined;
    connectOrCreate?: CoachCreateOrConnectWithoutWorkoutToDoInput | undefined;
    upsert?: CoachUpsertWithoutWorkoutToDoInput | undefined;
    connect?: CoachWhereUniqueInput | undefined;
    update?: CoachUpdateWithoutWorkoutToDoInput | undefined;
}
