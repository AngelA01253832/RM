import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCoachArgs } from "./args/FindUniqueCoachArgs";
import { Coach } from "../../../models/Coach";
export declare class FindUniqueCoachResolver {
    coach(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCoachArgs): Promise<Coach | null>;
}
