import { GraphQLResolveInfo } from "graphql";
import { DeleteDoneWorkoutArgs } from "./args/DeleteDoneWorkoutArgs";
import { DoneWorkout } from "../../../models/DoneWorkout";
export declare class DeleteDoneWorkoutResolver {
    deleteDoneWorkout(ctx: any, info: GraphQLResolveInfo, args: DeleteDoneWorkoutArgs): Promise<DoneWorkout | null>;
}
