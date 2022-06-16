import { GraphQLResolveInfo } from "graphql";
import { UpdateWorkoutToDoArgs } from "./args/UpdateWorkoutToDoArgs";
import { WorkoutToDo } from "../../../models/WorkoutToDo";
export declare class UpdateWorkoutToDoResolver {
    updateWorkoutToDo(ctx: any, info: GraphQLResolveInfo, args: UpdateWorkoutToDoArgs): Promise<WorkoutToDo | null>;
}
