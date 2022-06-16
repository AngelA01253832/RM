import { DoneWorkout } from "../models/DoneWorkout";
import { User } from "../models/User";
import { Weight } from "../models/Weight";
import { WorkoutToDo } from "../models/WorkoutToDo";
import { AthleteCount } from "../resolvers/outputs/AthleteCount";
export declare class Athlete {
    id: string;
    name: string;
    lastname: string;
    schoolId: string;
    gender: "Hombre" | "Mujer";
    height: number;
    user?: User;
    Weights?: Weight[];
    DoneWorkouts?: DoneWorkout[];
    WorkoutstToDo?: WorkoutToDo[];
    userId: string;
    _count?: AthleteCount | null;
}
