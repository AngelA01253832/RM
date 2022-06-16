import { GraphQLResolveInfo } from "graphql";
import { FindManyCoachArgs } from "./args/FindManyCoachArgs";
import { Coach } from "../../../models/Coach";
export declare class FindManyCoachResolver {
    coaches(ctx: any, info: GraphQLResolveInfo, args: FindManyCoachArgs): Promise<Coach[]>;
}
