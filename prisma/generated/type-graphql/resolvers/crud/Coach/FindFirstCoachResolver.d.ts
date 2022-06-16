import { GraphQLResolveInfo } from "graphql";
import { FindFirstCoachArgs } from "./args/FindFirstCoachArgs";
import { Coach } from "../../../models/Coach";
export declare class FindFirstCoachResolver {
    findFirstCoach(ctx: any, info: GraphQLResolveInfo, args: FindFirstCoachArgs): Promise<Coach | null>;
}
