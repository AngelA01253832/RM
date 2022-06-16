import { GraphQLResolveInfo } from "graphql";
import { UpdateManyDoneWorkoutArgs } from "./args/UpdateManyDoneWorkoutArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyDoneWorkoutResolver {
    updateManyDoneWorkout(ctx: any, info: GraphQLResolveInfo, args: UpdateManyDoneWorkoutArgs): Promise<AffectedRowsOutput>;
}
