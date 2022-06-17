import { GraphQLResolveInfo } from "graphql";
import { CreateManyGlobalWorkoutArgs } from "./args/CreateManyGlobalWorkoutArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyGlobalWorkoutResolver {
    createManyGlobalWorkout(ctx: any, info: GraphQLResolveInfo, args: CreateManyGlobalWorkoutArgs): Promise<AffectedRowsOutput>;
}
