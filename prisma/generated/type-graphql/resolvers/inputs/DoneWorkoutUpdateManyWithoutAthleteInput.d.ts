import { DoneWorkoutCreateManyAthleteInputEnvelope } from "../inputs/DoneWorkoutCreateManyAthleteInputEnvelope";
import { DoneWorkoutCreateOrConnectWithoutAthleteInput } from "../inputs/DoneWorkoutCreateOrConnectWithoutAthleteInput";
import { DoneWorkoutCreateWithoutAthleteInput } from "../inputs/DoneWorkoutCreateWithoutAthleteInput";
import { DoneWorkoutScalarWhereInput } from "../inputs/DoneWorkoutScalarWhereInput";
import { DoneWorkoutUpdateManyWithWhereWithoutAthleteInput } from "../inputs/DoneWorkoutUpdateManyWithWhereWithoutAthleteInput";
import { DoneWorkoutUpdateWithWhereUniqueWithoutAthleteInput } from "../inputs/DoneWorkoutUpdateWithWhereUniqueWithoutAthleteInput";
import { DoneWorkoutUpsertWithWhereUniqueWithoutAthleteInput } from "../inputs/DoneWorkoutUpsertWithWhereUniqueWithoutAthleteInput";
import { DoneWorkoutWhereUniqueInput } from "../inputs/DoneWorkoutWhereUniqueInput";
export declare class DoneWorkoutUpdateManyWithoutAthleteInput {
    create?: DoneWorkoutCreateWithoutAthleteInput[] | undefined;
    connectOrCreate?: DoneWorkoutCreateOrConnectWithoutAthleteInput[] | undefined;
    upsert?: DoneWorkoutUpsertWithWhereUniqueWithoutAthleteInput[] | undefined;
    createMany?: DoneWorkoutCreateManyAthleteInputEnvelope | undefined;
    set?: DoneWorkoutWhereUniqueInput[] | undefined;
    disconnect?: DoneWorkoutWhereUniqueInput[] | undefined;
    delete?: DoneWorkoutWhereUniqueInput[] | undefined;
    connect?: DoneWorkoutWhereUniqueInput[] | undefined;
    update?: DoneWorkoutUpdateWithWhereUniqueWithoutAthleteInput[] | undefined;
    updateMany?: DoneWorkoutUpdateManyWithWhereWithoutAthleteInput[] | undefined;
    deleteMany?: DoneWorkoutScalarWhereInput[] | undefined;
}
