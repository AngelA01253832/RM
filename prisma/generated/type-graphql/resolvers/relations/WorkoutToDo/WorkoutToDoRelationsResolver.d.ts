import { Athlete } from "../../../models/Athlete";
import { Coach } from "../../../models/Coach";
import { WorkoutToDo } from "../../../models/WorkoutToDo";
export declare class WorkoutToDoRelationsResolver {
    coach(workoutToDo: WorkoutToDo, ctx: any): Promise<Coach>;
    athlete(workoutToDo: WorkoutToDo, ctx: any): Promise<Athlete>;
}
