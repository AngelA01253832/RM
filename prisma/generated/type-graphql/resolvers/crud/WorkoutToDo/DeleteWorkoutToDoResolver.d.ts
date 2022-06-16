import { GraphQLResolveInfo } from "graphql";
import { DeleteWorkoutToDoArgs } from "./args/DeleteWorkoutToDoArgs";
import { WorkoutToDo } from "../../../models/WorkoutToDo";
export declare class DeleteWorkoutToDoResolver {
    deleteWorkoutToDo(ctx: any, info: GraphQLResolveInfo, args: DeleteWorkoutToDoArgs): Promise<WorkoutToDo | null>;
}
