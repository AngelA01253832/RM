import { AthleteOrderByWithRelationInput } from "../../../inputs/AthleteOrderByWithRelationInput";
import { AthleteWhereInput } from "../../../inputs/AthleteWhereInput";
import { AthleteWhereUniqueInput } from "../../../inputs/AthleteWhereUniqueInput";
export declare class FindManyAthleteArgs {
    where?: AthleteWhereInput | undefined;
    orderBy?: AthleteOrderByWithRelationInput[] | undefined;
    cursor?: AthleteWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "lastname" | "schoolId" | "gender" | "height" | "userId"> | undefined;
}
