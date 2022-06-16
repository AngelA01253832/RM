import { Admin } from "../../../models/Admin";
import { User } from "../../../models/User";
export declare class AdminRelationsResolver {
    user(admin: Admin, ctx: any): Promise<User>;
}
