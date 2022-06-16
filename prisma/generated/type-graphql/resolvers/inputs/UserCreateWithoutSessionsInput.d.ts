import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { AdminCreateNestedOneWithoutUserInput } from "../inputs/AdminCreateNestedOneWithoutUserInput";
import { AthleteCreateNestedOneWithoutUserInput } from "../inputs/AthleteCreateNestedOneWithoutUserInput";
import { CoachCreateNestedOneWithoutUserInput } from "../inputs/CoachCreateNestedOneWithoutUserInput";
export declare class UserCreateWithoutSessionsInput {
    id?: string | undefined;
    name?: string | undefined;
    email?: string | undefined;
    emailVerified?: Date | undefined;
    image?: string | undefined;
    accounts?: AccountCreateNestedManyWithoutUserInput | undefined;
    Coach?: CoachCreateNestedOneWithoutUserInput | undefined;
    Athlete?: AthleteCreateNestedOneWithoutUserInput | undefined;
    Admin?: AdminCreateNestedOneWithoutUserInput | undefined;
}
