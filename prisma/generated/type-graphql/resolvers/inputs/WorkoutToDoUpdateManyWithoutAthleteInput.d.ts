import { WorkoutToDoCreateManyAthleteInputEnvelope } from "../inputs/WorkoutToDoCreateManyAthleteInputEnvelope";
import { WorkoutToDoCreateOrConnectWithoutAthleteInput } from "../inputs/WorkoutToDoCreateOrConnectWithoutAthleteInput";
import { WorkoutToDoCreateWithoutAthleteInput } from "../inputs/WorkoutToDoCreateWithoutAthleteInput";
import { WorkoutToDoScalarWhereInput } from "../inputs/WorkoutToDoScalarWhereInput";
import { WorkoutToDoUpdateManyWithWhereWithoutAthleteInput } from "../inputs/WorkoutToDoUpdateManyWithWhereWithoutAthleteInput";
import { WorkoutToDoUpdateWithWhereUniqueWithoutAthleteInput } from "../inputs/WorkoutToDoUpdateWithWhereUniqueWithoutAthleteInput";
import { WorkoutToDoUpsertWithWhereUniqueWithoutAthleteInput } from "../inputs/WorkoutToDoUpsertWithWhereUniqueWithoutAthleteInput";
import { WorkoutToDoWhereUniqueInput } from "../inputs/WorkoutToDoWhereUniqueInput";
export declare class WorkoutToDoUpdateManyWithoutAthleteInput {
    create?: WorkoutToDoCreateWithoutAthleteInput[] | undefined;
    connectOrCreate?: WorkoutToDoCreateOrConnectWithoutAthleteInput[] | undefined;
    upsert?: WorkoutToDoUpsertWithWhereUniqueWithoutAthleteInput[] | undefined;
    createMany?: WorkoutToDoCreateManyAthleteInputEnvelope | undefined;
    set?: WorkoutToDoWhereUniqueInput[] | undefined;
    disconnect?: WorkoutToDoWhereUniqueInput[] | undefined;
    delete?: WorkoutToDoWhereUniqueInput[] | undefined;
    connect?: WorkoutToDoWhereUniqueInput[] | undefined;
    update?: WorkoutToDoUpdateWithWhereUniqueWithoutAthleteInput[] | undefined;
    updateMany?: WorkoutToDoUpdateManyWithWhereWithoutAthleteInput[] | undefined;
    deleteMany?: WorkoutToDoScalarWhereInput[] | undefined;
}
