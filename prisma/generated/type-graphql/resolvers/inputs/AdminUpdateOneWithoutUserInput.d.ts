import { AdminCreateOrConnectWithoutUserInput } from "../inputs/AdminCreateOrConnectWithoutUserInput";
import { AdminCreateWithoutUserInput } from "../inputs/AdminCreateWithoutUserInput";
import { AdminUpdateWithoutUserInput } from "../inputs/AdminUpdateWithoutUserInput";
import { AdminUpsertWithoutUserInput } from "../inputs/AdminUpsertWithoutUserInput";
import { AdminWhereUniqueInput } from "../inputs/AdminWhereUniqueInput";
export declare class AdminUpdateOneWithoutUserInput {
    create?: AdminCreateWithoutUserInput | undefined;
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput | undefined;
    upsert?: AdminUpsertWithoutUserInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: AdminWhereUniqueInput | undefined;
    update?: AdminUpdateWithoutUserInput | undefined;
}
