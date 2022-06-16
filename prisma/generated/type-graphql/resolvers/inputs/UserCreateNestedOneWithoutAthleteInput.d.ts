import { UserCreateOrConnectWithoutAthleteInput } from "../inputs/UserCreateOrConnectWithoutAthleteInput";
import { UserCreateWithoutAthleteInput } from "../inputs/UserCreateWithoutAthleteInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutAthleteInput {
    create?: UserCreateWithoutAthleteInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutAthleteInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
