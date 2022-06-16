import { Athlete } from "../models/Athlete";
import { Coach } from "../models/Coach";
export declare class WorkoutToDo {
    id: string;
    coach?: Coach;
    athlete?: Athlete;
    date: Date;
    goal: "Tiempo" | "Calorias" | "Distancia";
    coachId: string;
    athleteId: string;
}
