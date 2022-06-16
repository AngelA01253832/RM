import { CoachOrderByWithRelationInput } from "../../../inputs/CoachOrderByWithRelationInput";
import { CoachWhereInput } from "../../../inputs/CoachWhereInput";
import { CoachWhereUniqueInput } from "../../../inputs/CoachWhereUniqueInput";
export declare class AggregateCoachArgs {
    where?: CoachWhereInput | undefined;
    orderBy?: CoachOrderByWithRelationInput[] | undefined;
    cursor?: CoachWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
