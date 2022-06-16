import { Coach } from "../../../models/Coach";
import { User } from "../../../models/User";
import { WorkoutToDo } from "../../../models/WorkoutToDo";
import { CoachWorkoutToDoArgs } from "./args/CoachWorkoutToDoArgs";
export declare class CoachRelationsResolver {
    user(coach: Coach, ctx: any): Promise<User>;
    WorkoutToDo(coach: Coach, ctx: any, args: CoachWorkoutToDoArgs): Promise<WorkoutToDo[]>;
}
