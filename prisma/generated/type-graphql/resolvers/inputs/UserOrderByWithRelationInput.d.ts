import { AccountOrderByRelationAggregateInput } from "../inputs/AccountOrderByRelationAggregateInput";
import { AdminOrderByWithRelationInput } from "../inputs/AdminOrderByWithRelationInput";
import { AthleteOrderByWithRelationInput } from "../inputs/AthleteOrderByWithRelationInput";
import { CoachOrderByWithRelationInput } from "../inputs/CoachOrderByWithRelationInput";
import { SessionOrderByRelationAggregateInput } from "../inputs/SessionOrderByRelationAggregateInput";
export declare class UserOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    emailVerified?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    accounts?: AccountOrderByRelationAggregateInput | undefined;
    sessions?: SessionOrderByRelationAggregateInput | undefined;
    Coach?: CoachOrderByWithRelationInput | undefined;
    Athlete?: AthleteOrderByWithRelationInput | undefined;
    Admin?: AdminOrderByWithRelationInput | undefined;
}
