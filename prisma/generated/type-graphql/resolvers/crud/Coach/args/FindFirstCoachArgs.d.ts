import { CoachOrderByWithRelationInput } from "../../../inputs/CoachOrderByWithRelationInput";
import { CoachWhereInput } from "../../../inputs/CoachWhereInput";
import { CoachWhereUniqueInput } from "../../../inputs/CoachWhereUniqueInput";
export declare class FindFirstCoachArgs {
    where?: CoachWhereInput | undefined;
    orderBy?: CoachOrderByWithRelationInput[] | undefined;
    cursor?: CoachWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "lastname" | "schoolId" | "description" | "gender" | "status" | "userId"> | undefined;
}