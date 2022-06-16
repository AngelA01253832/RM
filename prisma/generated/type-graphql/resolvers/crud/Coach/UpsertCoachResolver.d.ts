import { GraphQLResolveInfo } from "graphql";
import { UpsertCoachArgs } from "./args/UpsertCoachArgs";
import { Coach } from "../../../models/Coach";
export declare class UpsertCoachResolver {
    upsertCoach(ctx: any, info: GraphQLResolveInfo, args: UpsertCoachArgs): Promise<Coach>;
}
