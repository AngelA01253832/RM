import { GraphQLResolveInfo } from "graphql";
import { UpdateManyCoachArgs } from "./args/UpdateManyCoachArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyCoachResolver {
    updateManyCoach(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCoachArgs): Promise<AffectedRowsOutput>;
}
