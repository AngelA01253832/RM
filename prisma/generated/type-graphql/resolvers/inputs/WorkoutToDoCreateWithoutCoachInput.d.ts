import { AthleteCreateNestedOneWithoutWorkoutstToDoInput } from "../inputs/AthleteCreateNestedOneWithoutWorkoutstToDoInput";
export declare class WorkoutToDoCreateWithoutCoachInput {
    id?: string | undefined;
    athlete: AthleteCreateNestedOneWithoutWorkoutstToDoInput;
    date: Date;
    indications: string;
    goal: "Tiempo" | "Calorias" | "Distancia";
    goalvalue: number;
}
