import { GraphQLResolveInfo } from "graphql";
import { CreateManyWorkoutToDoArgs } from "./args/CreateManyWorkoutToDoArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyWorkoutToDoResolver {
    createManyWorkoutToDo(ctx: any, info: GraphQLResolveInfo, args: CreateManyWorkoutToDoArgs): Promise<AffectedRowsOutput>;
}
