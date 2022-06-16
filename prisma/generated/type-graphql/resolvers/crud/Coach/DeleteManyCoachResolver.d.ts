import { GraphQLResolveInfo } from "graphql";
import { DeleteManyCoachArgs } from "./args/DeleteManyCoachArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyCoachResolver {
    deleteManyCoach(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCoachArgs): Promise<AffectedRowsOutput>;
}
