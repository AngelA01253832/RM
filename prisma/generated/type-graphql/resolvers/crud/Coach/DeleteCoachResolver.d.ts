import { GraphQLResolveInfo } from "graphql";
import { DeleteCoachArgs } from "./args/DeleteCoachArgs";
import { Coach } from "../../../models/Coach";
export declare class DeleteCoachResolver {
    deleteCoach(ctx: any, info: GraphQLResolveInfo, args: DeleteCoachArgs): Promise<Coach | null>;
}
