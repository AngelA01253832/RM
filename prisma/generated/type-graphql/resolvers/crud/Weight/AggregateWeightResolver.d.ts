import { GraphQLResolveInfo } from "graphql";
import { AggregateWeightArgs } from "./args/AggregateWeightArgs";
import { AggregateWeight } from "../../outputs/AggregateWeight";
export declare class AggregateWeightResolver {
    aggregateWeight(ctx: any, info: GraphQLResolveInfo, args: AggregateWeightArgs): Promise<AggregateWeight>;
}
