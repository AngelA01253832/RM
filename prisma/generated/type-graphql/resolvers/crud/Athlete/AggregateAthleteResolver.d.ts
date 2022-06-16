import { GraphQLResolveInfo } from "graphql";
import { AggregateAthleteArgs } from "./args/AggregateAthleteArgs";
import { AggregateAthlete } from "../../outputs/AggregateAthlete";
export declare class AggregateAthleteResolver {
    aggregateAthlete(ctx: any, info: GraphQLResolveInfo, args: AggregateAthleteArgs): Promise<AggregateAthlete>;
}
