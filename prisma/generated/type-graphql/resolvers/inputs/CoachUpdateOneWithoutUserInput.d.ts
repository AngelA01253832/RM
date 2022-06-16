import { CoachCreateOrConnectWithoutUserInput } from "../inputs/CoachCreateOrConnectWithoutUserInput";
import { CoachCreateWithoutUserInput } from "../inputs/CoachCreateWithoutUserInput";
import { CoachUpdateWithoutUserInput } from "../inputs/CoachUpdateWithoutUserInput";
import { CoachUpsertWithoutUserInput } from "../inputs/CoachUpsertWithoutUserInput";
import { CoachWhereUniqueInput } from "../inputs/CoachWhereUniqueInput";
export declare class CoachUpdateOneWithoutUserInput {
    create?: CoachCreateWithoutUserInput | undefined;
    connectOrCreate?: CoachCreateOrConnectWithoutUserInput | undefined;
    upsert?: CoachUpsertWithoutUserInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: CoachWhereUniqueInput | undefined;
    update?: CoachUpdateWithoutUserInput | undefined;
}
