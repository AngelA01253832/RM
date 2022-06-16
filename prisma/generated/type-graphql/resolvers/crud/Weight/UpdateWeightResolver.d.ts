import { GraphQLResolveInfo } from "graphql";
import { UpdateWeightArgs } from "./args/UpdateWeightArgs";
import { Weight } from "../../../models/Weight";
export declare class UpdateWeightResolver {
    updateWeight(ctx: any, info: GraphQLResolveInfo, args: UpdateWeightArgs): Promise<Weight | null>;
}
