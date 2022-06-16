import { GraphQLResolveInfo } from "graphql";
import { GroupByWorkoutToDoArgs } from "./args/GroupByWorkoutToDoArgs";
import { WorkoutToDoGroupBy } from "../../outputs/WorkoutToDoGroupBy";
export declare class GroupByWorkoutToDoResolver {
    groupByWorkoutToDo(ctx: any, info: GraphQLResolveInfo, args: GroupByWorkoutToDoArgs): Promise<WorkoutToDoGroupBy[]>;
}
