import { CoachCreateOrConnectWithoutUserInput } from "../inputs/CoachCreateOrConnectWithoutUserInput";
import { CoachCreateWithoutUserInput } from "../inputs/CoachCreateWithoutUserInput";
import { CoachWhereUniqueInput } from "../inputs/CoachWhereUniqueInput";
export declare class CoachCreateNestedOneWithoutUserInput {
    create?: CoachCreateWithoutUserInput | undefined;
    connectOrCreate?: CoachCreateOrConnectWithoutUserInput | undefined;
    connect?: CoachWhereUniqueInput | undefined;
}
