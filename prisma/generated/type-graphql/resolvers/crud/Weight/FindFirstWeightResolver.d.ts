import { GraphQLResolveInfo } from "graphql";
import { FindFirstWeightArgs } from "./args/FindFirstWeightArgs";
import { Weight } from "../../../models/Weight";
export declare class FindFirstWeightResolver {
    findFirstWeight(ctx: any, info: GraphQLResolveInfo, args: FindFirstWeightArgs): Promise<Weight | null>;
}
