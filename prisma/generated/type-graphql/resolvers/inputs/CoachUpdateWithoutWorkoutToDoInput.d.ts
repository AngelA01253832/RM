import { EnumEnum_GenderFieldUpdateOperationsInput } from "../inputs/EnumEnum_GenderFieldUpdateOperationsInput";
import { EnumEnum_StatusFieldUpdateOperationsInput } from "../inputs/EnumEnum_StatusFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutCoachInput } from "../inputs/UserUpdateOneRequiredWithoutCoachInput";
export declare class CoachUpdateWithoutWorkoutToDoInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    lastname?: StringFieldUpdateOperationsInput | undefined;
    schoolId?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    gender?: EnumEnum_GenderFieldUpdateOperationsInput | undefined;
    status?: EnumEnum_StatusFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutCoachInput | undefined;
}
