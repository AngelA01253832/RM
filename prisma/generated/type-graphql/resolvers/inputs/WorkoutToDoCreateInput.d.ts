import { AthleteCreateNestedOneWithoutWorkoutstToDoInput } from "../inputs/AthleteCreateNestedOneWithoutWorkoutstToDoInput";
import { CoachCreateNestedOneWithoutWorkoutToDoInput } from "../inputs/CoachCreateNestedOneWithoutWorkoutToDoInput";
export declare class WorkoutToDoCreateInput {
    id?: string | undefined;
    coach: CoachCreateNestedOneWithoutWorkoutToDoInput;
    athlete: AthleteCreateNestedOneWithoutWorkoutstToDoInput;
    date: Date;
    indications: string;
    goal: "Tiempo" | "Calorias" | "Distancia";
    goalvalue: number;
}
