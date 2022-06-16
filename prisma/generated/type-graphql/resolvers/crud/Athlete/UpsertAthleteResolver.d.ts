import { GraphQLResolveInfo } from "graphql";
import { UpsertAthleteArgs } from "./args/UpsertAthleteArgs";
import { Athlete } from "../../../models/Athlete";
export declare class UpsertAthleteResolver {
    upsertAthlete(ctx: any, info: GraphQLResolveInfo, args: UpsertAthleteArgs): Promise<Athlete>;
}
