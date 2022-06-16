import { GraphQLResolveInfo } from "graphql";
import { UpdateManyWeightArgs } from "./args/UpdateManyWeightArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyWeightResolver {
    updateManyWeight(ctx: any, info: GraphQLResolveInfo, args: UpdateManyWeightArgs): Promise<AffectedRowsOutput>;
}
