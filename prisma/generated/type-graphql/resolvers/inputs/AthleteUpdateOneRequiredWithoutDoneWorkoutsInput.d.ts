import { AthleteCreateOrConnectWithoutDoneWorkoutsInput } from "../inputs/AthleteCreateOrConnectWithoutDoneWorkoutsInput";
import { AthleteCreateWithoutDoneWorkoutsInput } from "../inputs/AthleteCreateWithoutDoneWorkoutsInput";
import { AthleteUpdateWithoutDoneWorkoutsInput } from "../inputs/AthleteUpdateWithoutDoneWorkoutsInput";
import { AthleteUpsertWithoutDoneWorkoutsInput } from "../inputs/AthleteUpsertWithoutDoneWorkoutsInput";
import { AthleteWhereUniqueInput } from "../inputs/AthleteWhereUniqueInput";
export declare class AthleteUpdateOneRequiredWithoutDoneWorkoutsInput {
    create?: AthleteCreateWithoutDoneWorkoutsInput | undefined;
    connectOrCreate?: AthleteCreateOrConnectWithoutDoneWorkoutsInput | undefined;
    upsert?: AthleteUpsertWithoutDoneWorkoutsInput | undefined;
    connect?: AthleteWhereUniqueInput | undefined;
    update?: AthleteUpdateWithoutDoneWorkoutsInput | undefined;
}
