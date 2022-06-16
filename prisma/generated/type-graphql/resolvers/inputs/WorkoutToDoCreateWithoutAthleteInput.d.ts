import { CoachCreateNestedOneWithoutWorkoutToDoInput } from "../inputs/CoachCreateNestedOneWithoutWorkoutToDoInput";
export declare class WorkoutToDoCreateWithoutAthleteInput {
    id?: string | undefined;
    coach: CoachCreateNestedOneWithoutWorkoutToDoInput;
    date: Date;
    goal: "Tiempo" | "Calorias" | "Distancia";
}
