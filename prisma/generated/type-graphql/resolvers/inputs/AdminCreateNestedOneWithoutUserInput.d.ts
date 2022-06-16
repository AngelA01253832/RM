import { AdminCreateOrConnectWithoutUserInput } from "../inputs/AdminCreateOrConnectWithoutUserInput";
import { AdminCreateWithoutUserInput } from "../inputs/AdminCreateWithoutUserInput";
import { AdminWhereUniqueInput } from "../inputs/AdminWhereUniqueInput";
export declare class AdminCreateNestedOneWithoutUserInput {
    create?: AdminCreateWithoutUserInput | undefined;
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput | undefined;
    connect?: AdminWhereUniqueInput | undefined;
}
