import { GraphQLResolveInfo } from "graphql";
import { FindFirstGlobalWorkoutArgs } from "./args/FindFirstGlobalWorkoutArgs";
import { GlobalWorkout } from "../../../models/GlobalWorkout";
export declare class FindFirstGlobalWorkoutResolver {
    findFirstGlobalWorkout(ctx: any, info: GraphQLResolveInfo, args: FindFirstGlobalWorkoutArgs): Promise<GlobalWorkout | null>;
}
