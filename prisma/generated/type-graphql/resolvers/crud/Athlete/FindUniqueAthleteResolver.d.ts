import { GraphQLResolveInfo } from "graphql";
import { FindUniqueAthleteArgs } from "./args/FindUniqueAthleteArgs";
import { Athlete } from "../../../models/Athlete";
export declare class FindUniqueAthleteResolver {
    athlete(ctx: any, info: GraphQLResolveInfo, args: FindUniqueAthleteArgs): Promise<Athlete | null>;
}
