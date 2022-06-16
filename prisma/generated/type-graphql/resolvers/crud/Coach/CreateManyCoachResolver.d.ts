import { GraphQLResolveInfo } from "graphql";
import { CreateManyCoachArgs } from "./args/CreateManyCoachArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyCoachResolver {
    createManyCoach(ctx: any, info: GraphQLResolveInfo, args: CreateManyCoachArgs): Promise<AffectedRowsOutput>;
}
