import { AthleteOrderByWithRelationInput } from "../inputs/AthleteOrderByWithRelationInput";
import { CoachOrderByWithRelationInput } from "../inputs/CoachOrderByWithRelationInput";
export declare class WorkoutToDoOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    coach?: CoachOrderByWithRelationInput | undefined;
    athlete?: AthleteOrderByWithRelationInput | undefined;
    date?: "asc" | "desc" | undefined;
    indications?: "asc" | "desc" | undefined;
    goal?: "asc" | "desc" | undefined;
    goalvalue?: "asc" | "desc" | undefined;
    coachId?: "asc" | "desc" | undefined;
    athleteId?: "asc" | "desc" | undefined;
}
