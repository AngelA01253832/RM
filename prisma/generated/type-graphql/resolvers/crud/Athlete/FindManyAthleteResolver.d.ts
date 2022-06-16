import { GraphQLResolveInfo } from "graphql";
import { FindManyAthleteArgs } from "./args/FindManyAthleteArgs";
import { Athlete } from "../../../models/Athlete";
export declare class FindManyAthleteResolver {
    athletes(ctx: any, info: GraphQLResolveInfo, args: FindManyAthleteArgs): Promise<Athlete[]>;
}
