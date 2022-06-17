import { GraphQLResolveInfo } from "graphql";
import { UpdateManyGlobalWorkoutArgs } from "./args/UpdateManyGlobalWorkoutArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyGlobalWorkoutResolver {
    updateManyGlobalWorkout(ctx: any, info: GraphQLResolveInfo, args: UpdateManyGlobalWorkoutArgs): Promise<AffectedRowsOutput>;
}
