import { GraphQLResolveInfo } from "graphql";
import { DeleteGlobalWorkoutArgs } from "./args/DeleteGlobalWorkoutArgs";
import { GlobalWorkout } from "../../../models/GlobalWorkout";
export declare class DeleteGlobalWorkoutResolver {
    deleteGlobalWorkout(ctx: any, info: GraphQLResolveInfo, args: DeleteGlobalWorkoutArgs): Promise<GlobalWorkout | null>;
}
