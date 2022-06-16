import { GraphQLResolveInfo } from "graphql";
import { AggregateDoneWorkoutArgs } from "./args/AggregateDoneWorkoutArgs";
import { AggregateDoneWorkout } from "../../outputs/AggregateDoneWorkout";
export declare class AggregateDoneWorkoutResolver {
    aggregateDoneWorkout(ctx: any, info: GraphQLResolveInfo, args: AggregateDoneWorkoutArgs): Promise<AggregateDoneWorkout>;
}
