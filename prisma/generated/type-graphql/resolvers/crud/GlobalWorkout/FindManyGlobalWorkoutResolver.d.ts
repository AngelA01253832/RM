import { GraphQLResolveInfo } from "graphql";
import { FindManyGlobalWorkoutArgs } from "./args/FindManyGlobalWorkoutArgs";
import { GlobalWorkout } from "../../../models/GlobalWorkout";
export declare class FindManyGlobalWorkoutResolver {
    globalWorkouts(ctx: any, info: GraphQLResolveInfo, args: FindManyGlobalWorkoutArgs): Promise<GlobalWorkout[]>;
}
