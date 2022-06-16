import { GraphQLResolveInfo } from "graphql";
import { DeleteManyDoneWorkoutArgs } from "./args/DeleteManyDoneWorkoutArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyDoneWorkoutResolver {
    deleteManyDoneWorkout(ctx: any, info: GraphQLResolveInfo, args: DeleteManyDoneWorkoutArgs): Promise<AffectedRowsOutput>;
}
