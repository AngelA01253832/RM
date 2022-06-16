import { WorkoutToDoCreateManyCoachInputEnvelope } from "../inputs/WorkoutToDoCreateManyCoachInputEnvelope";
import { WorkoutToDoCreateOrConnectWithoutCoachInput } from "../inputs/WorkoutToDoCreateOrConnectWithoutCoachInput";
import { WorkoutToDoCreateWithoutCoachInput } from "../inputs/WorkoutToDoCreateWithoutCoachInput";
import { WorkoutToDoWhereUniqueInput } from "../inputs/WorkoutToDoWhereUniqueInput";
export declare class WorkoutToDoCreateNestedManyWithoutCoachInput {
    create?: WorkoutToDoCreateWithoutCoachInput[] | undefined;
    connectOrCreate?: WorkoutToDoCreateOrConnectWithoutCoachInput[] | undefined;
    createMany?: WorkoutToDoCreateManyCoachInputEnvelope | undefined;
    connect?: WorkoutToDoWhereUniqueInput[] | undefined;
}
