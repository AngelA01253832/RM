import { AdminCreateNestedOneWithoutUserInput } from "../inputs/AdminCreateNestedOneWithoutUserInput";
import { AthleteCreateNestedOneWithoutUserInput } from "../inputs/AthleteCreateNestedOneWithoutUserInput";
import { CoachCreateNestedOneWithoutUserInput } from "../inputs/CoachCreateNestedOneWithoutUserInput";
import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutAccountsInput {
    id?: string | undefined;
    name?: string | undefined;
    email?: string | undefined;
    emailVerified?: Date | undefined;
    image?: string | undefined;
    sessions?: SessionCreateNestedManyWithoutUserInput | undefined;
    Coach?: CoachCreateNestedOneWithoutUserInput | undefined;
    Athlete?: AthleteCreateNestedOneWithoutUserInput | undefined;
    Admin?: AdminCreateNestedOneWithoutUserInput | undefined;
}
