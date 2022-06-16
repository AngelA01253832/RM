import { AthleteOrderByWithRelationInput } from "../inputs/AthleteOrderByWithRelationInput";
export declare class WeightOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    weight?: "asc" | "desc" | undefined;
    athlete?: AthleteOrderByWithRelationInput | undefined;
    date?: "asc" | "desc" | undefined;
    athleteId?: "asc" | "desc" | undefined;
}
