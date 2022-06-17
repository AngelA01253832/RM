import { GraphQLResolveInfo } from "graphql";
import { CreateGlobalWorkoutArgs } from "./args/CreateGlobalWorkoutArgs";
import { GlobalWorkout } from "../../../models/GlobalWorkout";
export declare class CreateGlobalWorkoutResolver {
    createGlobalWorkout(ctx: any, info: GraphQLResolveInfo, args: CreateGlobalWorkoutArgs): Promise<GlobalWorkout>;
}
