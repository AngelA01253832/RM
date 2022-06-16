import { GraphQLResolveInfo } from "graphql";
import { DeleteAthleteArgs } from "./args/DeleteAthleteArgs";
import { Athlete } from "../../../models/Athlete";
export declare class DeleteAthleteResolver {
    deleteAthlete(ctx: any, info: GraphQLResolveInfo, args: DeleteAthleteArgs): Promise<Athlete | null>;
}
