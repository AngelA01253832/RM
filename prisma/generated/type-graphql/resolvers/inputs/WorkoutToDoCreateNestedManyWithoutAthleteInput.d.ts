import { WorkoutToDoCreateManyAthleteInputEnvelope } from "../inputs/WorkoutToDoCreateManyAthleteInputEnvelope";
import { WorkoutToDoCreateOrConnectWithoutAthleteInput } from "../inputs/WorkoutToDoCreateOrConnectWithoutAthleteInput";
import { WorkoutToDoCreateWithoutAthleteInput } from "../inputs/WorkoutToDoCreateWithoutAthleteInput";
import { WorkoutToDoWhereUniqueInput } from "../inputs/WorkoutToDoWhereUniqueInput";
export declare class WorkoutToDoCreateNestedManyWithoutAthleteInput {
    create?: WorkoutToDoCreateWithoutAthleteInput[] | undefined;
    connectOrCreate?: WorkoutToDoCreateOrConnectWithoutAthleteInput[] | undefined;
    createMany?: WorkoutToDoCreateManyAthleteInputEnvelope | undefined;
    connect?: WorkoutToDoWhereUniqueInput[] | undefined;
}
