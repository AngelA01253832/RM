import { AthleteCreateOrConnectWithoutWeightsInput } from "../inputs/AthleteCreateOrConnectWithoutWeightsInput";
import { AthleteCreateWithoutWeightsInput } from "../inputs/AthleteCreateWithoutWeightsInput";
import { AthleteUpdateWithoutWeightsInput } from "../inputs/AthleteUpdateWithoutWeightsInput";
import { AthleteUpsertWithoutWeightsInput } from "../inputs/AthleteUpsertWithoutWeightsInput";
import { AthleteWhereUniqueInput } from "../inputs/AthleteWhereUniqueInput";
export declare class AthleteUpdateOneRequiredWithoutWeightsInput {
    create?: AthleteCreateWithoutWeightsInput | undefined;
    connectOrCreate?: AthleteCreateOrConnectWithoutWeightsInput | undefined;
    upsert?: AthleteUpsertWithoutWeightsInput | undefined;
    connect?: AthleteWhereUniqueInput | undefined;
    update?: AthleteUpdateWithoutWeightsInput | undefined;
}
