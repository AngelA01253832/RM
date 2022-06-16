import { GraphQLResolveInfo } from "graphql";
import { FindFirstAthleteArgs } from "./args/FindFirstAthleteArgs";
import { Athlete } from "../../../models/Athlete";
export declare class FindFirstAthleteResolver {
    findFirstAthlete(ctx: any, info: GraphQLResolveInfo, args: FindFirstAthleteArgs): Promise<Athlete | null>;
}
