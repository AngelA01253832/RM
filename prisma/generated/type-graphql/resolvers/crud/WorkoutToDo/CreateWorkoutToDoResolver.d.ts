import { GraphQLResolveInfo } from "graphql";
import { CreateWorkoutToDoArgs } from "./args/CreateWorkoutToDoArgs";
import { WorkoutToDo } from "../../../models/WorkoutToDo";
export declare class CreateWorkoutToDoResolver {
    createWorkoutToDo(ctx: any, info: GraphQLResolveInfo, args: CreateWorkoutToDoArgs): Promise<WorkoutToDo>;
}
