import { AthleteUpdateOneRequiredWithoutWorkoutstToDoInput } from "../inputs/AthleteUpdateOneRequiredWithoutWorkoutstToDoInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumEnum_GoalFieldUpdateOperationsInput } from "../inputs/EnumEnum_GoalFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class WorkoutToDoUpdateWithoutCoachInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    athlete?: AthleteUpdateOneRequiredWithoutWorkoutstToDoInput | undefined;
    date?: DateTimeFieldUpdateOperationsInput | undefined;
    indications?: StringFieldUpdateOperationsInput | undefined;
    goal?: EnumEnum_GoalFieldUpdateOperationsInput | undefined;
    goalvalue?: IntFieldUpdateOperationsInput | undefined;
}
