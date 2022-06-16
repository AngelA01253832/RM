import { GraphQLResolveInfo } from "graphql";
import { CreateAthleteArgs } from "./args/CreateAthleteArgs";
import { Athlete } from "../../../models/Athlete";
export declare class CreateAthleteResolver {
    createAthlete(ctx: any, info: GraphQLResolveInfo, args: CreateAthleteArgs): Promise<Athlete>;
}
