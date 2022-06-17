import { GraphQLResolveInfo } from "graphql";
import { AggregateGlobalWorkoutArgs } from "./args/AggregateGlobalWorkoutArgs";
import { AggregateGlobalWorkout } from "../../outputs/AggregateGlobalWorkout";
export declare class AggregateGlobalWorkoutResolver {
    aggregateGlobalWorkout(ctx: any, info: GraphQLResolveInfo, args: AggregateGlobalWorkoutArgs): Promise<AggregateGlobalWorkout>;
}
