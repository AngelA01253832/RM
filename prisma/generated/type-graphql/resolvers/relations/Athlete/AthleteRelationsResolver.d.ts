import { Athlete } from "../../../models/Athlete";
import { DoneWorkout } from "../../../models/DoneWorkout";
import { User } from "../../../models/User";
import { Weight } from "../../../models/Weight";
import { WorkoutToDo } from "../../../models/WorkoutToDo";
import { AthleteDoneWorkoutsArgs } from "./args/AthleteDoneWorkoutsArgs";
import { AthleteWeightsArgs } from "./args/AthleteWeightsArgs";
import { AthleteWorkoutstToDoArgs } from "./args/AthleteWorkoutstToDoArgs";
export declare class AthleteRelationsResolver {
    user(athlete: Athlete, ctx: any): Promise<User>;
    Weights(athlete: Athlete, ctx: any, args: AthleteWeightsArgs): Promise<Weight[]>;
    DoneWorkouts(athlete: Athlete, ctx: any, args: AthleteDoneWorkoutsArgs): Promise<DoneWorkout[]>;
    WorkoutstToDo(athlete: Athlete, ctx: any, args: AthleteWorkoutstToDoArgs): Promise<WorkoutToDo[]>;
}
