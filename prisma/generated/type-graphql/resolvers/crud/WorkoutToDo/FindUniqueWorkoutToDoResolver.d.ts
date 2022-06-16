import { GraphQLResolveInfo } from "graphql";
import { FindUniqueWorkoutToDoArgs } from "./args/FindUniqueWorkoutToDoArgs";
import { WorkoutToDo } from "../../../models/WorkoutToDo";
export declare class FindUniqueWorkoutToDoResolver {
    workoutToDo(ctx: any, info: GraphQLResolveInfo, args: FindUniqueWorkoutToDoArgs): Promise<WorkoutToDo | null>;
}
