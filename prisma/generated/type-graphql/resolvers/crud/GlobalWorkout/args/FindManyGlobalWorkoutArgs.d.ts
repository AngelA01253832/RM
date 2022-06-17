import { GlobalWorkoutOrderByWithRelationInput } from "../../../inputs/GlobalWorkoutOrderByWithRelationInput";
import { GlobalWorkoutWhereInput } from "../../../inputs/GlobalWorkoutWhereInput";
import { GlobalWorkoutWhereUniqueInput } from "../../../inputs/GlobalWorkoutWhereUniqueInput";
export declare class FindManyGlobalWorkoutArgs {
    where?: GlobalWorkoutWhereInput | undefined;
    orderBy?: GlobalWorkoutOrderByWithRelationInput[] | undefined;
    cursor?: GlobalWorkoutWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "indications" | "goal" | "goalvalue" | "coachId"> | undefined;
}
