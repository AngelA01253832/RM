import { GraphQLResolveInfo } from "graphql";
import { FindFirstDoneWorkoutArgs } from "./args/FindFirstDoneWorkoutArgs";
import { DoneWorkout } from "../../../models/DoneWorkout";
export declare class FindFirstDoneWorkoutResolver {
    findFirstDoneWorkout(ctx: any, info: GraphQLResolveInfo, args: FindFirstDoneWorkoutArgs): Promise<DoneWorkout | null>;
}
