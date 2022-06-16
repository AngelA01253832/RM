import { Athlete } from "../models/Athlete";
export declare class DoneWorkout {
    id: string;
    athlete?: Athlete;
    date: Date;
    calories: number;
    time: number;
    distance: number;
    intensity: number;
    athleteId: string;
}
