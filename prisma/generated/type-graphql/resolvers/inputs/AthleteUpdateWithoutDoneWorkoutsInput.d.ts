import { EnumEnum_GenderFieldUpdateOperationsInput } from "../inputs/EnumEnum_GenderFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutAthleteInput } from "../inputs/UserUpdateOneRequiredWithoutAthleteInput";
import { WeightUpdateManyWithoutAthleteInput } from "../inputs/WeightUpdateManyWithoutAthleteInput";
import { WorkoutToDoUpdateManyWithoutAthleteInput } from "../inputs/WorkoutToDoUpdateManyWithoutAthleteInput";
export declare class AthleteUpdateWithoutDoneWorkoutsInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    lastname?: StringFieldUpdateOperationsInput | undefined;
    schoolId?: StringFieldUpdateOperationsInput | undefined;
    gender?: EnumEnum_GenderFieldUpdateOperationsInput | undefined;
    height?: IntFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutAthleteInput | undefined;
    Weights?: WeightUpdateManyWithoutAthleteInput | undefined;
    WorkoutstToDo?: WorkoutToDoUpdateManyWithoutAthleteInput | undefined;
}
