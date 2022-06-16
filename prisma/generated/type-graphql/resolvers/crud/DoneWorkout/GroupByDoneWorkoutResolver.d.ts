import { GraphQLResolveInfo } from "graphql";
import { GroupByDoneWorkoutArgs } from "./args/GroupByDoneWorkoutArgs";
import { DoneWorkoutGroupBy } from "../../outputs/DoneWorkoutGroupBy";
export declare class GroupByDoneWorkoutResolver {
    groupByDoneWorkout(ctx: any, info: GraphQLResolveInfo, args: GroupByDoneWorkoutArgs): Promise<DoneWorkoutGroupBy[]>;
}
