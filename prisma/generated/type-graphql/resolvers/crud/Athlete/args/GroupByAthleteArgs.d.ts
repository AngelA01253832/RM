import { AthleteOrderByWithAggregationInput } from "../../../inputs/AthleteOrderByWithAggregationInput";
import { AthleteScalarWhereWithAggregatesInput } from "../../../inputs/AthleteScalarWhereWithAggregatesInput";
import { AthleteWhereInput } from "../../../inputs/AthleteWhereInput";
export declare class GroupByAthleteArgs {
    where?: AthleteWhereInput | undefined;
    orderBy?: AthleteOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "lastname" | "schoolId" | "gender" | "height" | "userId">;
    having?: AthleteScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
