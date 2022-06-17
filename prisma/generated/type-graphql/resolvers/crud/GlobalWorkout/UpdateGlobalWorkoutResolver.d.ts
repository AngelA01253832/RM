import { GraphQLResolveInfo } from "graphql";
import { UpdateGlobalWorkoutArgs } from "./args/UpdateGlobalWorkoutArgs";
import { GlobalWorkout } from "../../../models/GlobalWorkout";
export declare class UpdateGlobalWorkoutResolver {
    updateGlobalWorkout(ctx: any, info: GraphQLResolveInfo, args: UpdateGlobalWorkoutArgs): Promise<GlobalWorkout | null>;
}
