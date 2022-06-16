import { AthleteUpdateOneRequiredWithoutDoneWorkoutsInput } from "../inputs/AthleteUpdateOneRequiredWithoutDoneWorkoutsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class DoneWorkoutUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    athlete?: AthleteUpdateOneRequiredWithoutDoneWorkoutsInput | undefined;
    date?: DateTimeFieldUpdateOperationsInput | undefined;
    calories?: IntFieldUpdateOperationsInput | undefined;
    time?: IntFieldUpdateOperationsInput | undefined;
    distance?: FloatFieldUpdateOperationsInput | undefined;
    intensity?: IntFieldUpdateOperationsInput | undefined;
}
