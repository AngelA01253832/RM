import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class AdminOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    lastname?: "asc" | "desc" | undefined;
    schoolId?: "asc" | "desc" | undefined;
    user?: UserOrderByWithRelationInput | undefined;
    gender?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
}
