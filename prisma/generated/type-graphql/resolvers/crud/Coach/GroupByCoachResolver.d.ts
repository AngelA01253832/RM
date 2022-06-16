import { GraphQLResolveInfo } from "graphql";
import { GroupByCoachArgs } from "./args/GroupByCoachArgs";
import { CoachGroupBy } from "../../outputs/CoachGroupBy";
export declare class GroupByCoachResolver {
    groupByCoach(ctx: any, info: GraphQLResolveInfo, args: GroupByCoachArgs): Promise<CoachGroupBy[]>;
}
