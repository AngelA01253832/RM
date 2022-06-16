import { DoneWorkoutOrderByWithRelationInput } from "../../../inputs/DoneWorkoutOrderByWithRelationInput";
import { DoneWorkoutWhereInput } from "../../../inputs/DoneWorkoutWhereInput";
import { DoneWorkoutWhereUniqueInput } from "../../../inputs/DoneWorkoutWhereUniqueInput";
export declare class AthleteDoneWorkoutsArgs {
    where?: DoneWorkoutWhereInput | undefined;
    orderBy?: DoneWorkoutOrderByWithRelationInput[] | undefined;
    cursor?: DoneWorkoutWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "date" | "calories" | "time" | "distance" | "intensity" | "athleteId"> | undefined;
}
