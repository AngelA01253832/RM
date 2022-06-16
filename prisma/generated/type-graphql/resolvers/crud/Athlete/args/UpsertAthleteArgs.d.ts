import { AthleteCreateInput } from "../../../inputs/AthleteCreateInput";
import { AthleteUpdateInput } from "../../../inputs/AthleteUpdateInput";
import { AthleteWhereUniqueInput } from "../../../inputs/AthleteWhereUniqueInput";
export declare class UpsertAthleteArgs {
    where: AthleteWhereUniqueInput;
    create: AthleteCreateInput;
    update: AthleteUpdateInput;
}
