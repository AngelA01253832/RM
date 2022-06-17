import { Athlete } from "../models/Athlete";
import { Coach } from "../models/Coach";
export declare class WorkoutToDo {
    id: string;
    coach?: Coach;
    athlete?: Athlete;
    date: Date;
    indications: string;
    goal: "Tiempo" | "Calorias" | "Distancia";
    goalvalue: number;
    coachId: string;
    athleteId: string;
}
