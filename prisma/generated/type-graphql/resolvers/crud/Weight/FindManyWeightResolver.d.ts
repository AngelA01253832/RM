import { GraphQLResolveInfo } from "graphql";
import { FindManyWeightArgs } from "./args/FindManyWeightArgs";
import { Weight } from "../../../models/Weight";
export declare class FindManyWeightResolver {
    weights(ctx: any, info: GraphQLResolveInfo, args: FindManyWeightArgs): Promise<Weight[]>;
}
