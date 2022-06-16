import { UserCreateOrConnectWithoutAdminInput } from "../inputs/UserCreateOrConnectWithoutAdminInput";
import { UserCreateWithoutAdminInput } from "../inputs/UserCreateWithoutAdminInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutAdminInput {
    create?: UserCreateWithoutAdminInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
