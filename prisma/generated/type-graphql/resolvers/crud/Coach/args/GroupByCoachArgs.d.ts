import { CoachOrderByWithAggregationInput } from "../../../inputs/CoachOrderByWithAggregationInput";
import { CoachScalarWhereWithAggregatesInput } from "../../../inputs/CoachScalarWhereWithAggregatesInput";
import { CoachWhereInput } from "../../../inputs/CoachWhereInput";
export declare class GroupByCoachArgs {
    where?: CoachWhereInput | undefined;
    orderBy?: CoachOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "lastname" | "schoolId" | "description" | "scheduler" | "KnowTrainer" | "gender" | "status" | "userId">;
    having?: CoachScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
