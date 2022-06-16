import { AthleteCreateNestedOneWithoutWorkoutstToDoInput } from "../inputs/AthleteCreateNestedOneWithoutWorkoutstToDoInput";
export declare class WorkoutToDoCreateWithoutCoachInput {
    id?: string | undefined;
    athlete: AthleteCreateNestedOneWithoutWorkoutstToDoInput;
    date: Date;
    goal: "Tiempo" | "Calorias" | "Distancia";
}
