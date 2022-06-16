import { UserCreateOrConnectWithoutCoachInput } from "../inputs/UserCreateOrConnectWithoutCoachInput";
import { UserCreateWithoutCoachInput } from "../inputs/UserCreateWithoutCoachInput";
import { UserUpdateWithoutCoachInput } from "../inputs/UserUpdateWithoutCoachInput";
import { UserUpsertWithoutCoachInput } from "../inputs/UserUpsertWithoutCoachInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutCoachInput {
    create?: UserCreateWithoutCoachInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutCoachInput | undefined;
    upsert?: UserUpsertWithoutCoachInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutCoachInput | undefined;
}
