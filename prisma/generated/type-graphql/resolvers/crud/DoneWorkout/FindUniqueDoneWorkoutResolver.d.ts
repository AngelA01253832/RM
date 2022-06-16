import { GraphQLResolveInfo } from "graphql";
import { FindUniqueDoneWorkoutArgs } from "./args/FindUniqueDoneWorkoutArgs";
import { DoneWorkout } from "../../../models/DoneWorkout";
export declare class FindUniqueDoneWorkoutResolver {
    doneWorkout(ctx: any, info: GraphQLResolveInfo, args: FindUniqueDoneWorkoutArgs): Promise<DoneWorkout | null>;
}
