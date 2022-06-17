import { GraphQLResolveInfo } from "graphql";
import { UpsertGlobalWorkoutArgs } from "./args/UpsertGlobalWorkoutArgs";
import { GlobalWorkout } from "../../../models/GlobalWorkout";
export declare class UpsertGlobalWorkoutResolver {
    upsertGlobalWorkout(ctx: any, info: GraphQLResolveInfo, args: UpsertGlobalWorkoutArgs): Promise<GlobalWorkout>;
}
