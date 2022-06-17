import { CoachCreateNestedOneWithoutWorkoutToDoInput } from "../inputs/CoachCreateNestedOneWithoutWorkoutToDoInput";
export declare class WorkoutToDoCreateWithoutAthleteInput {
    id?: string | undefined;
    coach: CoachCreateNestedOneWithoutWorkoutToDoInput;
    date: Date;
    indications: string;
    goal: "Tiempo" | "Calorias" | "Distancia";
    goalvalue: number;
}
