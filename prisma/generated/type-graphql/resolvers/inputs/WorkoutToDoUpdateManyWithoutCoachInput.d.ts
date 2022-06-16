import { WorkoutToDoCreateManyCoachInputEnvelope } from "../inputs/WorkoutToDoCreateManyCoachInputEnvelope";
import { WorkoutToDoCreateOrConnectWithoutCoachInput } from "../inputs/WorkoutToDoCreateOrConnectWithoutCoachInput";
import { WorkoutToDoCreateWithoutCoachInput } from "../inputs/WorkoutToDoCreateWithoutCoachInput";
import { WorkoutToDoScalarWhereInput } from "../inputs/WorkoutToDoScalarWhereInput";
import { WorkoutToDoUpdateManyWithWhereWithoutCoachInput } from "../inputs/WorkoutToDoUpdateManyWithWhereWithoutCoachInput";
import { WorkoutToDoUpdateWithWhereUniqueWithoutCoachInput } from "../inputs/WorkoutToDoUpdateWithWhereUniqueWithoutCoachInput";
import { WorkoutToDoUpsertWithWhereUniqueWithoutCoachInput } from "../inputs/WorkoutToDoUpsertWithWhereUniqueWithoutCoachInput";
import { WorkoutToDoWhereUniqueInput } from "../inputs/WorkoutToDoWhereUniqueInput";
export declare class WorkoutToDoUpdateManyWithoutCoachInput {
    create?: WorkoutToDoCreateWithoutCoachInput[] | undefined;
    connectOrCreate?: WorkoutToDoCreateOrConnectWithoutCoachInput[] | undefined;
    upsert?: WorkoutToDoUpsertWithWhereUniqueWithoutCoachInput[] | undefined;
    createMany?: WorkoutToDoCreateManyCoachInputEnvelope | undefined;
    set?: WorkoutToDoWhereUniqueInput[] | undefined;
    disconnect?: WorkoutToDoWhereUniqueInput[] | undefined;
    delete?: WorkoutToDoWhereUniqueInput[] | undefined;
    connect?: WorkoutToDoWhereUniqueInput[] | undefined;
    update?: WorkoutToDoUpdateWithWhereUniqueWithoutCoachInput[] | undefined;
    updateMany?: WorkoutToDoUpdateManyWithWhereWithoutCoachInput[] | undefined;
    deleteMany?: WorkoutToDoScalarWhereInput[] | undefined;
}
