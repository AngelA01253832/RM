import { AthleteUpdateOneRequiredWithoutWeightsInput } from "../inputs/AthleteUpdateOneRequiredWithoutWeightsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class WeightUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    weight?: FloatFieldUpdateOperationsInput | undefined;
    athlete?: AthleteUpdateOneRequiredWithoutWeightsInput | undefined;
    date?: DateTimeFieldUpdateOperationsInput | undefined;
}
