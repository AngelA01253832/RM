import { GraphQLResolveInfo } from "graphql";
import { AggregateWorkoutToDoArgs } from "./args/AggregateWorkoutToDoArgs";
import { AggregateWorkoutToDo } from "../../outputs/AggregateWorkoutToDo";
export declare class AggregateWorkoutToDoResolver {
    aggregateWorkoutToDo(ctx: any, info: GraphQLResolveInfo, args: AggregateWorkoutToDoArgs): Promise<AggregateWorkoutToDo>;
}
