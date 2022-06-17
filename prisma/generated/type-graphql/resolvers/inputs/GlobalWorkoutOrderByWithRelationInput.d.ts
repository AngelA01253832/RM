import { CoachOrderByWithRelationInput } from "../inputs/CoachOrderByWithRelationInput";
export declare class GlobalWorkoutOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    coach?: CoachOrderByWithRelationInput | undefined;
    indications?: "asc" | "desc" | undefined;
    goal?: "asc" | "desc" | undefined;
    goalvalue?: "asc" | "desc" | undefined;
    coachId?: "asc" | "desc" | undefined;
}
