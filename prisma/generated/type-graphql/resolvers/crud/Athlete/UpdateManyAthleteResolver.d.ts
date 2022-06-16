import { GraphQLResolveInfo } from "graphql";
import { UpdateManyAthleteArgs } from "./args/UpdateManyAthleteArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyAthleteResolver {
    updateManyAthlete(ctx: any, info: GraphQLResolveInfo, args: UpdateManyAthleteArgs): Promise<AffectedRowsOutput>;
}
