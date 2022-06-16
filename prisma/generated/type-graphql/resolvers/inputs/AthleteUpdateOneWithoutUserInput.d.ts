import { AthleteCreateOrConnectWithoutUserInput } from "../inputs/AthleteCreateOrConnectWithoutUserInput";
import { AthleteCreateWithoutUserInput } from "../inputs/AthleteCreateWithoutUserInput";
import { AthleteUpdateWithoutUserInput } from "../inputs/AthleteUpdateWithoutUserInput";
import { AthleteUpsertWithoutUserInput } from "../inputs/AthleteUpsertWithoutUserInput";
import { AthleteWhereUniqueInput } from "../inputs/AthleteWhereUniqueInput";
export declare class AthleteUpdateOneWithoutUserInput {
    create?: AthleteCreateWithoutUserInput | undefined;
    connectOrCreate?: AthleteCreateOrConnectWithoutUserInput | undefined;
    upsert?: AthleteUpsertWithoutUserInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: AthleteWhereUniqueInput | undefined;
    update?: AthleteUpdateWithoutUserInput | undefined;
}
