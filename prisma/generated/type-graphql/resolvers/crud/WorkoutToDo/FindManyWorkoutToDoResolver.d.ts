import { GraphQLResolveInfo } from "graphql";
import { FindManyWorkoutToDoArgs } from "./args/FindManyWorkoutToDoArgs";
import { WorkoutToDo } from "../../../models/WorkoutToDo";
export declare class FindManyWorkoutToDoResolver {
    workoutToDos(ctx: any, info: GraphQLResolveInfo, args: FindManyWorkoutToDoArgs): Promise<WorkoutToDo[]>;
}
