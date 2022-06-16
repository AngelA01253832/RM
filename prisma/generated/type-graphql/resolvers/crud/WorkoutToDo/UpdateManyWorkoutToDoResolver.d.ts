import { GraphQLResolveInfo } from "graphql";
import { UpdateManyWorkoutToDoArgs } from "./args/UpdateManyWorkoutToDoArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyWorkoutToDoResolver {
    updateManyWorkoutToDo(ctx: any, info: GraphQLResolveInfo, args: UpdateManyWorkoutToDoArgs): Promise<AffectedRowsOutput>;
}
