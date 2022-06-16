import { WeightOrderByWithRelationInput } from "../../../inputs/WeightOrderByWithRelationInput";
import { WeightWhereInput } from "../../../inputs/WeightWhereInput";
import { WeightWhereUniqueInput } from "../../../inputs/WeightWhereUniqueInput";
export declare class AthleteWeightsArgs {
    where?: WeightWhereInput | undefined;
    orderBy?: WeightOrderByWithRelationInput[] | undefined;
    cursor?: WeightWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "weight" | "date" | "athleteId"> | undefined;
}
