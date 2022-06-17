import { Coach } from "../../../models/Coach";
import { GlobalWorkout } from "../../../models/GlobalWorkout";
import { User } from "../../../models/User";
import { WorkoutToDo } from "../../../models/WorkoutToDo";
import { CoachGlobalWorkoutArgs } from "./args/CoachGlobalWorkoutArgs";
import { CoachWorkoutToDoArgs } from "./args/CoachWorkoutToDoArgs";
export declare class CoachRelationsResolver {
    user(coach: Coach, ctx: any): Promise<User>;
    WorkoutToDo(coach: Coach, ctx: any, args: CoachWorkoutToDoArgs): Promise<WorkoutToDo[]>;
    GlobalWorkout(coach: Coach, ctx: any, args: CoachGlobalWorkoutArgs): Promise<GlobalWorkout[]>;
}
