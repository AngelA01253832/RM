import { GraphQLResolveInfo } from "graphql";
import { CreateManyDoneWorkoutArgs } from "./args/CreateManyDoneWorkoutArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyDoneWorkoutResolver {
    createManyDoneWorkout(ctx: any, info: GraphQLResolveInfo, args: CreateManyDoneWorkoutArgs): Promise<AffectedRowsOutput>;
}
