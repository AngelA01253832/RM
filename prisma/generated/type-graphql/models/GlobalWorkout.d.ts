import { Coach } from "../models/Coach";
export declare class GlobalWorkout {
    id: string;
    coach?: Coach;
    indications: string;
    goal: string;
    goalvalue: "Tiempo" | "Calorias" | "Distancia";
    coachId: string;
}
