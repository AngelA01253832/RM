import { UserCreateOrConnectWithoutCoachInput } from "../inputs/UserCreateOrConnectWithoutCoachInput";
import { UserCreateWithoutCoachInput } from "../inputs/UserCreateWithoutCoachInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutCoachInput {
    create?: UserCreateWithoutCoachInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutCoachInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
