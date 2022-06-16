import { AthleteUpdateOneRequiredWithoutWorkoutstToDoInput } from "../inputs/AthleteUpdateOneRequiredWithoutWorkoutstToDoInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumEnum_GoalFieldUpdateOperationsInput } from "../inputs/EnumEnum_GoalFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class WorkoutToDoUpdateWithoutCoachInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    athlete?: AthleteUpdateOneRequiredWithoutWorkoutstToDoInput | undefined;
    date?: DateTimeFieldUpdateOperationsInput | undefined;
    goal?: EnumEnum_GoalFieldUpdateOperationsInput | undefined;
}
