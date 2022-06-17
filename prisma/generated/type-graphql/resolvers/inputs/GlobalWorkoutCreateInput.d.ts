import { CoachCreateNestedOneWithoutGlobalWorkoutInput } from "../inputs/CoachCreateNestedOneWithoutGlobalWorkoutInput";
export declare class GlobalWorkoutCreateInput {
    id?: string | undefined;
    coach: CoachCreateNestedOneWithoutGlobalWorkoutInput;
    indications: string;
    goal: string;
    goalvalue: "Tiempo" | "Calorias" | "Distancia";
}
