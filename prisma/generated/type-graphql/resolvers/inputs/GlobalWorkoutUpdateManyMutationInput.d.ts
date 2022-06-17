import { EnumEnum_GoalFieldUpdateOperationsInput } from "../inputs/EnumEnum_GoalFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class GlobalWorkoutUpdateManyMutationInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    indications?: StringFieldUpdateOperationsInput | undefined;
    goal?: StringFieldUpdateOperationsInput | undefined;
    goalvalue?: EnumEnum_GoalFieldUpdateOperationsInput | undefined;
}
