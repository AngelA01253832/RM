import { UserCreateOrConnectWithoutAdminInput } from "../inputs/UserCreateOrConnectWithoutAdminInput";
import { UserCreateWithoutAdminInput } from "../inputs/UserCreateWithoutAdminInput";
import { UserUpdateWithoutAdminInput } from "../inputs/UserUpdateWithoutAdminInput";
import { UserUpsertWithoutAdminInput } from "../inputs/UserUpsertWithoutAdminInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutAdminInput {
    create?: UserCreateWithoutAdminInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput | undefined;
    upsert?: UserUpsertWithoutAdminInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutAdminInput | undefined;
}
