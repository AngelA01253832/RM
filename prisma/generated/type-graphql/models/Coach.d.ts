import { GlobalWorkout } from "../models/GlobalWorkout";
import { User } from "../models/User";
import { WorkoutToDo } from "../models/WorkoutToDo";
import { CoachCount } from "../resolvers/outputs/CoachCount";
export declare class Coach {
    id: string;
    name: string;
    lastname: string;
    schoolId: string;
    description: string;
    scheduler: string;
    KnowTrainer: string;
    gender: "Hombre" | "Mujer";
    status: "Negado" | "Autorizado";
    user?: User;
    userId: string;
    WorkoutToDo?: WorkoutToDo[];
    GlobalWorkout?: GlobalWorkout[];
    _count?: CoachCount | null;
}
