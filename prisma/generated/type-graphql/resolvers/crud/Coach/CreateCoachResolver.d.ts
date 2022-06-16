import { GraphQLResolveInfo } from "graphql";
import { CreateCoachArgs } from "./args/CreateCoachArgs";
import { Coach } from "../../../models/Coach";
export declare class CreateCoachResolver {
    createCoach(ctx: any, info: GraphQLResolveInfo, args: CreateCoachArgs): Promise<Coach>;
}
