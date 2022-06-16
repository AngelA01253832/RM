import { GraphQLResolveInfo } from "graphql";
import { DeleteManyWeightArgs } from "./args/DeleteManyWeightArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyWeightResolver {
    deleteManyWeight(ctx: any, info: GraphQLResolveInfo, args: DeleteManyWeightArgs): Promise<AffectedRowsOutput>;
}
