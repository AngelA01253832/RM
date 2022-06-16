import { AthleteCreateOrConnectWithoutDoneWorkoutsInput } from "../inputs/AthleteCreateOrConnectWithoutDoneWorkoutsInput";
import { AthleteCreateWithoutDoneWorkoutsInput } from "../inputs/AthleteCreateWithoutDoneWorkoutsInput";
import { AthleteWhereUniqueInput } from "../inputs/AthleteWhereUniqueInput";
export declare class AthleteCreateNestedOneWithoutDoneWorkoutsInput {
    create?: AthleteCreateWithoutDoneWorkoutsInput | undefined;
    connectOrCreate?: AthleteCreateOrConnectWithoutDoneWorkoutsInput | undefined;
    connect?: AthleteWhereUniqueInput | undefined;
}
