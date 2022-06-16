import { EnumEnum_GenderFieldUpdateOperationsInput } from "../inputs/EnumEnum_GenderFieldUpdateOperationsInput";
import { EnumEnum_StatusFieldUpdateOperationsInput } from "../inputs/EnumEnum_StatusFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { WorkoutToDoUpdateManyWithoutCoachInput } from "../inputs/WorkoutToDoUpdateManyWithoutCoachInput";
export declare class CoachUpdateWithoutUserInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    lastname?: StringFieldUpdateOperationsInput | undefined;
    schoolId?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    gender?: EnumEnum_GenderFieldUpdateOperationsInput | undefined;
    status?: EnumEnum_StatusFieldUpdateOperationsInput | undefined;
    WorkoutToDo?: WorkoutToDoUpdateManyWithoutCoachInput | undefined;
}
