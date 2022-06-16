import { GraphQLResolveInfo } from "graphql";
import { UpdateCoachArgs } from "./args/UpdateCoachArgs";
import { Coach } from "../../../models/Coach";
export declare class UpdateCoachResolver {
    updateCoach(ctx: any, info: GraphQLResolveInfo, args: UpdateCoachArgs): Promise<Coach | null>;
}
