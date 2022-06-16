import { GraphQLResolveInfo } from "graphql";
import { UpsertWeightArgs } from "./args/UpsertWeightArgs";
import { Weight } from "../../../models/Weight";
export declare class UpsertWeightResolver {
    upsertWeight(ctx: any, info: GraphQLResolveInfo, args: UpsertWeightArgs): Promise<Weight>;
}
