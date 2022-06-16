import { GraphQLResolveInfo } from "graphql";
import { UpsertDoneWorkoutArgs } from "./args/UpsertDoneWorkoutArgs";
import { DoneWorkout } from "../../../models/DoneWorkout";
export declare class UpsertDoneWorkoutResolver {
    upsertDoneWorkout(ctx: any, info: GraphQLResolveInfo, args: UpsertDoneWorkoutArgs): Promise<DoneWorkout>;
}
