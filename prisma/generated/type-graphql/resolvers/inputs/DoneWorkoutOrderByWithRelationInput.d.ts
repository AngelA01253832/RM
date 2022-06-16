import { AthleteOrderByWithRelationInput } from "../inputs/AthleteOrderByWithRelationInput";
export declare class DoneWorkoutOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    athlete?: AthleteOrderByWithRelationInput | undefined;
    date?: "asc" | "desc" | undefined;
    calories?: "asc" | "desc" | undefined;
    time?: "asc" | "desc" | undefined;
    distance?: "asc" | "desc" | undefined;
    intensity?: "asc" | "desc" | undefined;
    athleteId?: "asc" | "desc" | undefined;
}
