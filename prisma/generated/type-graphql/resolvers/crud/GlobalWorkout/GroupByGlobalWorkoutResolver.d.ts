import { GraphQLResolveInfo } from "graphql";
import { GroupByGlobalWorkoutArgs } from "./args/GroupByGlobalWorkoutArgs";
import { GlobalWorkoutGroupBy } from "../../outputs/GlobalWorkoutGroupBy";
export declare class GroupByGlobalWorkoutResolver {
    groupByGlobalWorkout(ctx: any, info: GraphQLResolveInfo, args: GroupByGlobalWorkoutArgs): Promise<GlobalWorkoutGroupBy[]>;
}
