import { GraphQLResolveInfo } from "graphql";
import { AggregateCoachArgs } from "./args/AggregateCoachArgs";
import { AggregateCoach } from "../../outputs/AggregateCoach";
export declare class AggregateCoachResolver {
    aggregateCoach(ctx: any, info: GraphQLResolveInfo, args: AggregateCoachArgs): Promise<AggregateCoach>;
}
