import { GraphQLResolveInfo } from "graphql";
import { UpdateAthleteArgs } from "./args/UpdateAthleteArgs";
import { Athlete } from "../../../models/Athlete";
export declare class UpdateAthleteResolver {
    updateAthlete(ctx: any, info: GraphQLResolveInfo, args: UpdateAthleteArgs): Promise<Athlete | null>;
}
