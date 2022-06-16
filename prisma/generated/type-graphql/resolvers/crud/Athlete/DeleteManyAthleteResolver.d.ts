import { GraphQLResolveInfo } from "graphql";
import { DeleteManyAthleteArgs } from "./args/DeleteManyAthleteArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyAthleteResolver {
    deleteManyAthlete(ctx: any, info: GraphQLResolveInfo, args: DeleteManyAthleteArgs): Promise<AffectedRowsOutput>;
}
