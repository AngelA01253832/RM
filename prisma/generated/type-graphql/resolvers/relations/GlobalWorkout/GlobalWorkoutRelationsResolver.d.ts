import { Coach } from "../../../models/Coach";
import { GlobalWorkout } from "../../../models/GlobalWorkout";
export declare class GlobalWorkoutRelationsResolver {
    coach(globalWorkout: GlobalWorkout, ctx: any): Promise<Coach>;
}
