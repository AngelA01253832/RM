import { GlobalWorkoutCreateManyCoachInputEnvelope } from "../inputs/GlobalWorkoutCreateManyCoachInputEnvelope";
import { GlobalWorkoutCreateOrConnectWithoutCoachInput } from "../inputs/GlobalWorkoutCreateOrConnectWithoutCoachInput";
import { GlobalWorkoutCreateWithoutCoachInput } from "../inputs/GlobalWorkoutCreateWithoutCoachInput";
import { GlobalWorkoutWhereUniqueInput } from "../inputs/GlobalWorkoutWhereUniqueInput";
export declare class GlobalWorkoutCreateNestedManyWithoutCoachInput {
    create?: GlobalWorkoutCreateWithoutCoachInput[] | undefined;
    connectOrCreate?: GlobalWorkoutCreateOrConnectWithoutCoachInput[] | undefined;
    createMany?: GlobalWorkoutCreateManyCoachInputEnvelope | undefined;
    connect?: GlobalWorkoutWhereUniqueInput[] | undefined;
}
