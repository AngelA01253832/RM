import { GraphQLResolveInfo } from "graphql";
import { UpsertWorkoutToDoArgs } from "./args/UpsertWorkoutToDoArgs";
import { WorkoutToDo } from "../../../models/WorkoutToDo";
export declare class UpsertWorkoutToDoResolver {
    upsertWorkoutToDo(ctx: any, info: GraphQLResolveInfo, args: UpsertWorkoutToDoArgs): Promise<WorkoutToDo>;
}
