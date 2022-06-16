import { CoachUpdateOneRequiredWithoutWorkoutToDoInput } from "../inputs/CoachUpdateOneRequiredWithoutWorkoutToDoInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumEnum_GoalFieldUpdateOperationsInput } from "../inputs/EnumEnum_GoalFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class WorkoutToDoUpdateWithoutAthleteInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    coach?: CoachUpdateOneRequiredWithoutWorkoutToDoInput | undefined;
    date?: DateTimeFieldUpdateOperationsInput | undefined;
    goal?: EnumEnum_GoalFieldUpdateOperationsInput | undefined;
}
