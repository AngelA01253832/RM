import { GraphQLResolveInfo } from "graphql";
import { CreateWeightArgs } from "./args/CreateWeightArgs";
import { Weight } from "../../../models/Weight";
export declare class CreateWeightResolver {
    createWeight(ctx: any, info: GraphQLResolveInfo, args: CreateWeightArgs): Promise<Weight>;
}
