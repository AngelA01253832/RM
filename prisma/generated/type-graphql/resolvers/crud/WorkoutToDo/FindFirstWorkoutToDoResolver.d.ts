import { GraphQLResolveInfo } from "graphql";
import { FindFirstWorkoutToDoArgs } from "./args/FindFirstWorkoutToDoArgs";
import { WorkoutToDo } from "../../../models/WorkoutToDo";
export declare class FindFirstWorkoutToDoResolver {
    findFirstWorkoutToDo(ctx: any, info: GraphQLResolveInfo, args: FindFirstWorkoutToDoArgs): Promise<WorkoutToDo | null>;
}
