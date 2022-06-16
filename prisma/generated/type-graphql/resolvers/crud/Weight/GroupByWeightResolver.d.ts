import { GraphQLResolveInfo } from "graphql";
import { GroupByWeightArgs } from "./args/GroupByWeightArgs";
import { WeightGroupBy } from "../../outputs/WeightGroupBy";
export declare class GroupByWeightResolver {
    groupByWeight(ctx: any, info: GraphQLResolveInfo, args: GroupByWeightArgs): Promise<WeightGroupBy[]>;
}
