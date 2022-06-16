import { GraphQLResolveInfo } from "graphql";
import { FindUniqueWeightArgs } from "./args/FindUniqueWeightArgs";
import { Weight } from "../../../models/Weight";
export declare class FindUniqueWeightResolver {
    weight(ctx: any, info: GraphQLResolveInfo, args: FindUniqueWeightArgs): Promise<Weight | null>;
}
