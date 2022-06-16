import { DoneWorkoutOrderByWithRelationInput } from "../../../inputs/DoneWorkoutOrderByWithRelationInput";
import { DoneWorkoutWhereInput } from "../../../inputs/DoneWorkoutWhereInput";
import { DoneWorkoutWhereUniqueInput } from "../../../inputs/DoneWorkoutWhereUniqueInput";
export declare class AggregateDoneWorkoutArgs {
    where?: DoneWorkoutWhereInput | undefined;
    orderBy?: DoneWorkoutOrderByWithRelationInput[] | undefined;
    cursor?: DoneWorkoutWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
