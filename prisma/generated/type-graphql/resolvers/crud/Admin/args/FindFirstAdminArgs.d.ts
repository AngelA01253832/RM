import { AdminOrderByWithRelationInput } from "../../../inputs/AdminOrderByWithRelationInput";
import { AdminWhereInput } from "../../../inputs/AdminWhereInput";
import { AdminWhereUniqueInput } from "../../../inputs/AdminWhereUniqueInput";
export declare class FindFirstAdminArgs {
    where?: AdminWhereInput | undefined;
    orderBy?: AdminOrderByWithRelationInput[] | undefined;
    cursor?: AdminWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "lastname" | "schoolId" | "gender" | "userId"> | undefined;
}
