import { AdminOrderByWithAggregationInput } from "../../../inputs/AdminOrderByWithAggregationInput";
import { AdminScalarWhereWithAggregatesInput } from "../../../inputs/AdminScalarWhereWithAggregatesInput";
import { AdminWhereInput } from "../../../inputs/AdminWhereInput";
export declare class GroupByAdminArgs {
    where?: AdminWhereInput | undefined;
    orderBy?: AdminOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "lastname" | "schoolId" | "gender" | "userId">;
    having?: AdminScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
