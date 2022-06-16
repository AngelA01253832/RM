import { GraphQLResolveInfo } from "graphql";
import { CreateManyAthleteArgs } from "./args/CreateManyAthleteArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyAthleteResolver {
    createManyAthlete(ctx: any, info: GraphQLResolveInfo, args: CreateManyAthleteArgs): Promise<AffectedRowsOutput>;
}
