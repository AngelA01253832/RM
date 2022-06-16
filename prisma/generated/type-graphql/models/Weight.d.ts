import { Athlete } from "../models/Athlete";
export declare class Weight {
    id: string;
    weight: number;
    athlete?: Athlete;
    date: Date;
    athleteId: string;
}
