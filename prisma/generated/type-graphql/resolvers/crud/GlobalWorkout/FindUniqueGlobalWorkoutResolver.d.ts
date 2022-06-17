import { GraphQLResolveInfo } from "graphql";
import { FindUniqueGlobalWorkoutArgs } from "./args/FindUniqueGlobalWorkoutArgs";
import { GlobalWorkout } from "../../../models/GlobalWorkout";
export declare class FindUniqueGlobalWorkoutResolver {
    globalWorkout(ctx: any, info: GraphQLResolveInfo, args: FindUniqueGlobalWorkoutArgs): Promise<GlobalWorkout | null>;
}
