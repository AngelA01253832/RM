import { AthleteCreateNestedOneWithoutWorkoutstToDoInput } from "../inputs/AthleteCreateNestedOneWithoutWorkoutstToDoInput";
import { CoachCreateNestedOneWithoutWorkoutToDoInput } from "../inputs/CoachCreateNestedOneWithoutWorkoutToDoInput";
export declare class WorkoutToDoCreateInput {
    id?: string | undefined;
    coach: CoachCreateNestedOneWithoutWorkoutToDoInput;
    athlete: AthleteCreateNestedOneWithoutWorkoutstToDoInput;
    date: Date;
    goal: "Tiempo" | "Calorias" | "Distancia";
}
