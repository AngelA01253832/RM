import { GraphQLResolveInfo } from "graphql";
import { FindManyDoneWorkoutArgs } from "./args/FindManyDoneWorkoutArgs";
import { DoneWorkout } from "../../../models/DoneWorkout";
export declare class FindManyDoneWorkoutResolver {
    doneWorkouts(ctx: any, info: GraphQLResolveInfo, args: FindManyDoneWorkoutArgs): Promise<DoneWorkout[]>;
}
