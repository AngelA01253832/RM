import { AdminUpdateOneWithoutUserInput } from "../inputs/AdminUpdateOneWithoutUserInput";
import { AthleteUpdateOneWithoutUserInput } from "../inputs/AthleteUpdateOneWithoutUserInput";
import { CoachUpdateOneWithoutUserInput } from "../inputs/CoachUpdateOneWithoutUserInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { SessionUpdateManyWithoutUserInput } from "../inputs/SessionUpdateManyWithoutUserInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class UserUpdateWithoutAccountsInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    email?: NullableStringFieldUpdateOperationsInput | undefined;
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    image?: NullableStringFieldUpdateOperationsInput | undefined;
    sessions?: SessionUpdateManyWithoutUserInput | undefined;
    Coach?: CoachUpdateOneWithoutUserInput | undefined;
    Athlete?: AthleteUpdateOneWithoutUserInput | undefined;
    Admin?: AdminUpdateOneWithoutUserInput | undefined;
}
