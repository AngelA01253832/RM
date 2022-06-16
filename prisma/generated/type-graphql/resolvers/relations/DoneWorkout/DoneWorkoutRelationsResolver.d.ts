import { Athlete } from "../../../models/Athlete";
import { DoneWorkout } from "../../../models/DoneWorkout";
export declare class DoneWorkoutRelationsResolver {
    athlete(doneWorkout: DoneWorkout, ctx: any): Promise<Athlete>;
}
