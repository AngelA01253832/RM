import { DoneWorkoutUpdateManyWithoutAthleteInput } from "../inputs/DoneWorkoutUpdateManyWithoutAthleteInput";
import { EnumEnum_GenderFieldUpdateOperationsInput } from "../inputs/EnumEnum_GenderFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutAthleteInput } from "../inputs/UserUpdateOneRequiredWithoutAthleteInput";
import { WeightUpdateManyWithoutAthleteInput } from "../inputs/WeightUpdateManyWithoutAthleteInput";
export declare class AthleteUpdateWithoutWorkoutstToDoInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    lastname?: StringFieldUpdateOperationsInput | undefined;
    schoolId?: StringFieldUpdateOperationsInput | undefined;
    gender?: EnumEnum_GenderFieldUpdateOperationsInput | undefined;
    height?: IntFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutAthleteInput | undefined;
    Weights?: WeightUpdateManyWithoutAthleteInput | undefined;
    DoneWorkouts?: DoneWorkoutUpdateManyWithoutAthleteInput | undefined;
}
