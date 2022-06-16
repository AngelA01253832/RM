import { UserCreateOrConnectWithoutAthleteInput } from "../inputs/UserCreateOrConnectWithoutAthleteInput";
import { UserCreateWithoutAthleteInput } from "../inputs/UserCreateWithoutAthleteInput";
import { UserUpdateWithoutAthleteInput } from "../inputs/UserUpdateWithoutAthleteInput";
import { UserUpsertWithoutAthleteInput } from "../inputs/UserUpsertWithoutAthleteInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutAthleteInput {
    create?: UserCreateWithoutAthleteInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutAthleteInput | undefined;
    upsert?: UserUpsertWithoutAthleteInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutAthleteInput | undefined;
}
