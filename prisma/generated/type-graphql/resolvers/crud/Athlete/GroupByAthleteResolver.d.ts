import { GraphQLResolveInfo } from "graphql";
import { GroupByAthleteArgs } from "./args/GroupByAthleteArgs";
import { AthleteGroupBy } from "../../outputs/AthleteGroupBy";
export declare class GroupByAthleteResolver {
    groupByAthlete(ctx: any, info: GraphQLResolveInfo, args: GroupByAthleteArgs): Promise<AthleteGroupBy[]>;
}
