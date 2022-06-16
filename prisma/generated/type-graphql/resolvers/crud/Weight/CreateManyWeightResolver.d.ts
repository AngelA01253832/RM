import { GraphQLResolveInfo } from "graphql";
import { CreateManyWeightArgs } from "./args/CreateManyWeightArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyWeightResolver {
    createManyWeight(ctx: any, info: GraphQLResolveInfo, args: CreateManyWeightArgs): Promise<AffectedRowsOutput>;
}
