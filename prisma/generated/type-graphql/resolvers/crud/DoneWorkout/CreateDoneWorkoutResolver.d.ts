import { GraphQLResolveInfo } from "graphql";
import { CreateDoneWorkoutArgs } from "./args/CreateDoneWorkoutArgs";
import { DoneWorkout } from "../../../models/DoneWorkout";
export declare class CreateDoneWorkoutResolver {
    createDoneWorkout(ctx: any, info: GraphQLResolveInfo, args: CreateDoneWorkoutArgs): Promise<DoneWorkout>;
}
