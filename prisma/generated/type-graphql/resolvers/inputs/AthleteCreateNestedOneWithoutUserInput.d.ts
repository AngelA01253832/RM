import { AthleteCreateOrConnectWithoutUserInput } from "../inputs/AthleteCreateOrConnectWithoutUserInput";
import { AthleteCreateWithoutUserInput } from "../inputs/AthleteCreateWithoutUserInput";
import { AthleteWhereUniqueInput } from "../inputs/AthleteWhereUniqueInput";
export declare class AthleteCreateNestedOneWithoutUserInput {
    create?: AthleteCreateWithoutUserInput | undefined;
    connectOrCreate?: AthleteCreateOrConnectWithoutUserInput | undefined;
    connect?: AthleteWhereUniqueInput | undefined;
}
