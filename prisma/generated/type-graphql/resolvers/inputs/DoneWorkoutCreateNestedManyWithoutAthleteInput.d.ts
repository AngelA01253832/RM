import { DoneWorkoutCreateManyAthleteInputEnvelope } from "../inputs/DoneWorkoutCreateManyAthleteInputEnvelope";
import { DoneWorkoutCreateOrConnectWithoutAthleteInput } from "../inputs/DoneWorkoutCreateOrConnectWithoutAthleteInput";
import { DoneWorkoutCreateWithoutAthleteInput } from "../inputs/DoneWorkoutCreateWithoutAthleteInput";
import { DoneWorkoutWhereUniqueInput } from "../inputs/DoneWorkoutWhereUniqueInput";
export declare class DoneWorkoutCreateNestedManyWithoutAthleteInput {
    create?: DoneWorkoutCreateWithoutAthleteInput[] | undefined;
    connectOrCreate?: DoneWorkoutCreateOrConnectWithoutAthleteInput[] | undefined;
    createMany?: DoneWorkoutCreateManyAthleteInputEnvelope | undefined;
    connect?: DoneWorkoutWhereUniqueInput[] | undefined;
}
