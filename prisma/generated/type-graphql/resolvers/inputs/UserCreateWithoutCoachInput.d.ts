import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { AdminCreateNestedOneWithoutUserInput } from "../inputs/AdminCreateNestedOneWithoutUserInput";
import { AthleteCreateNestedOneWithoutUserInput } from "../inputs/AthleteCreateNestedOneWithoutUserInput";
import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutCoachInput {
    id?: string | undefined;
    name?: string | undefined;
    email?: string | undefined;
    emailVerified?: Date | undefined;
    image?: string | undefined;
    accounts?: AccountCreateNestedManyWithoutUserInput | undefined;
    sessions?: SessionCreateNestedManyWithoutUserInput | undefined;
    Athlete?: AthleteCreateNestedOneWithoutUserInput | undefined;
    Admin?: AdminCreateNestedOneWithoutUserInput | undefined;
}
