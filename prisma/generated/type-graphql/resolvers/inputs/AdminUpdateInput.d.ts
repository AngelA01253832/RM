import { EnumEnum_GenderFieldUpdateOperationsInput } from "../inputs/EnumEnum_GenderFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutAdminInput } from "../inputs/UserUpdateOneRequiredWithoutAdminInput";
export declare class AdminUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    lastname?: StringFieldUpdateOperationsInput | undefined;
    schoolId?: StringFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutAdminInput | undefined;
    gender?: EnumEnum_GenderFieldUpdateOperationsInput | undefined;
}
