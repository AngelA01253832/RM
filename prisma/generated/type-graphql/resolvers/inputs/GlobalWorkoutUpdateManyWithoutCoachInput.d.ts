import { GlobalWorkoutCreateManyCoachInputEnvelope } from "../inputs/GlobalWorkoutCreateManyCoachInputEnvelope";
import { GlobalWorkoutCreateOrConnectWithoutCoachInput } from "../inputs/GlobalWorkoutCreateOrConnectWithoutCoachInput";
import { GlobalWorkoutCreateWithoutCoachInput } from "../inputs/GlobalWorkoutCreateWithoutCoachInput";
import { GlobalWorkoutScalarWhereInput } from "../inputs/GlobalWorkoutScalarWhereInput";
import { GlobalWorkoutUpdateManyWithWhereWithoutCoachInput } from "../inputs/GlobalWorkoutUpdateManyWithWhereWithoutCoachInput";
import { GlobalWorkoutUpdateWithWhereUniqueWithoutCoachInput } from "../inputs/GlobalWorkoutUpdateWithWhereUniqueWithoutCoachInput";
import { GlobalWorkoutUpsertWithWhereUniqueWithoutCoachInput } from "../inputs/GlobalWorkoutUpsertWithWhereUniqueWithoutCoachInput";
import { GlobalWorkoutWhereUniqueInput } from "../inputs/GlobalWorkoutWhereUniqueInput";
export declare class GlobalWorkoutUpdateManyWithoutCoachInput {
    create?: GlobalWorkoutCreateWithoutCoachInput[] | undefined;
    connectOrCreate?: GlobalWorkoutCreateOrConnectWithoutCoachInput[] | undefined;
    upsert?: GlobalWorkoutUpsertWithWhereUniqueWithoutCoachInput[] | undefined;
    createMany?: GlobalWorkoutCreateManyCoachInputEnvelope | undefined;
    set?: GlobalWorkoutWhereUniqueInput[] | undefined;
    disconnect?: GlobalWorkoutWhereUniqueInput[] | undefined;
    delete?: GlobalWorkoutWhereUniqueInput[] | undefined;
    connect?: GlobalWorkoutWhereUniqueInput[] | undefined;
    update?: GlobalWorkoutUpdateWithWhereUniqueWithoutCoachInput[] | undefined;
    updateMany?: GlobalWorkoutUpdateManyWithWhereWithoutCoachInput[] | undefined;
    deleteMany?: GlobalWorkoutScalarWhereInput[] | undefined;
}
