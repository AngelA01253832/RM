import { GraphQLResolveInfo } from "graphql";
import { UpdateDoneWorkoutArgs } from "./args/UpdateDoneWorkoutArgs";
import { DoneWorkout } from "../../../models/DoneWorkout";
export declare class UpdateDoneWorkoutResolver {
    updateDoneWorkout(ctx: any, info: GraphQLResolveInfo, args: UpdateDoneWorkoutArgs): Promise<DoneWorkout | null>;
}
