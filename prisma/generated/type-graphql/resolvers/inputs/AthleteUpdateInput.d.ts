import { DoneWorkoutUpdateManyWithoutAthleteInput } from "../inputs/DoneWorkoutUpdateManyWithoutAthleteInput";
import { EnumEnum_GenderFieldUpdateOperationsInput } from "../inputs/EnumEnum_GenderFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutAthleteInput } from "../inputs/UserUpdateOneRequiredWithoutAthleteInput";
import { WeightUpdateManyWithoutAthleteInput } from "../inputs/WeightUpdateManyWithoutAthleteInput";
import { WorkoutToDoUpdateManyWithoutAthleteInput } from "../inputs/WorkoutToDoUpdateManyWithoutAthleteInput";
export declare class AthleteUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    lastname?: StringFieldUpdateOperationsInput | undefined;
    schoolId?: StringFieldUpdateOperationsInput | undefined;
    gender?: EnumEnum_GenderFieldUpdateOperationsInput | undefined;
    height?: IntFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutAthleteInput | undefined;
    Weights?: WeightUpdateManyWithoutAthleteInput | undefined;
    DoneWorkouts?: DoneWorkoutUpdateManyWithoutAthleteInput | undefined;
    WorkoutstToDo?: WorkoutToDoUpdateManyWithoutAthleteInput | undefined;
}
