import { GraphQLResolveInfo } from "graphql";
import { DeleteManyWorkoutToDoArgs } from "./args/DeleteManyWorkoutToDoArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyWorkoutToDoResolver {
    deleteManyWorkoutToDo(ctx: any, info: GraphQLResolveInfo, args: DeleteManyWorkoutToDoArgs): Promise<AffectedRowsOutput>;
}
