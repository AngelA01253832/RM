import { CoachCreateInput } from "../../../inputs/CoachCreateInput";
import { CoachUpdateInput } from "../../../inputs/CoachUpdateInput";
import { CoachWhereUniqueInput } from "../../../inputs/CoachWhereUniqueInput";
export declare class UpsertCoachArgs {
    where: CoachWhereUniqueInput;
    create: CoachCreateInput;
    update: CoachUpdateInput;
}
