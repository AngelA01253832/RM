import { GraphQLResolveInfo } from "graphql";
import { DeleteWeightArgs } from "./args/DeleteWeightArgs";
import { Weight } from "../../../models/Weight";
export declare class DeleteWeightResolver {
    deleteWeight(ctx: any, info: GraphQLResolveInfo, args: DeleteWeightArgs): Promise<Weight | null>;
}
