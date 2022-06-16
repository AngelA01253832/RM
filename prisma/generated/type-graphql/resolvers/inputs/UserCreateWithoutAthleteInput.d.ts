import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { AdminCreateNestedOneWithoutUserInput } from "../inputs/AdminCreateNestedOneWithoutUserInput";
import { CoachCreateNestedOneWithoutUserInput } from "../inputs/CoachCreateNestedOneWithoutUserInput";
import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutAthleteInput {
    id?: string | undefined;
    name?: string | undefined;
    email?: string | undefined;
    emailVerified?: Date | undefined;
    image?: string | undefined;
    accounts?: AccountCreateNestedManyWithoutUserInput | undefined;
    sessions?: SessionCreateNestedManyWithoutUserInput | undefined;
    Coach?: CoachCreateNestedOneWithoutUserInput | undefined;
    Admin?: AdminCreateNestedOneWithoutUserInput | undefined;
}
