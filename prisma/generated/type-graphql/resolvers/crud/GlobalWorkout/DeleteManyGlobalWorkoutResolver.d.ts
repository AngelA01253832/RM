import { GraphQLResolveInfo } from "graphql";
import { DeleteManyGlobalWorkoutArgs } from "./args/DeleteManyGlobalWorkoutArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyGlobalWorkoutResolver {
    deleteManyGlobalWorkout(ctx: any, info: GraphQLResolveInfo, args: DeleteManyGlobalWorkoutArgs): Promise<AffectedRowsOutput>;
}
