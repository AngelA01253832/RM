import { CoachUpdateOneRequiredWithoutGlobalWorkoutInput } from "../inputs/CoachUpdateOneRequiredWithoutGlobalWorkoutInput";
import { EnumEnum_GoalFieldUpdateOperationsInput } from "../inputs/EnumEnum_GoalFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class GlobalWorkoutUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    coach?: CoachUpdateOneRequiredWithoutGlobalWorkoutInput | undefined;
    indications?: StringFieldUpdateOperationsInput | undefined;
    goal?: StringFieldUpdateOperationsInput | undefined;
    goalvalue?: EnumEnum_GoalFieldUpdateOperationsInput | undefined;
}
