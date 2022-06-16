import { AthleteCreateOrConnectWithoutWeightsInput } from "../inputs/AthleteCreateOrConnectWithoutWeightsInput";
import { AthleteCreateWithoutWeightsInput } from "../inputs/AthleteCreateWithoutWeightsInput";
import { AthleteWhereUniqueInput } from "../inputs/AthleteWhereUniqueInput";
export declare class AthleteCreateNestedOneWithoutWeightsInput {
    create?: AthleteCreateWithoutWeightsInput | undefined;
    connectOrCreate?: AthleteCreateOrConnectWithoutWeightsInput | undefined;
    connect?: AthleteWhereUniqueInput | undefined;
}
