import { Account } from "../../../models/Account";
import { Admin } from "../../../models/Admin";
import { Athlete } from "../../../models/Athlete";
import { Coach } from "../../../models/Coach";
import { Session } from "../../../models/Session";
import { User } from "../../../models/User";
import { UserAccountsArgs } from "./args/UserAccountsArgs";
import { UserSessionsArgs } from "./args/UserSessionsArgs";
export declare class UserRelationsResolver {
    accounts(user: User, ctx: any, args: UserAccountsArgs): Promise<Account[]>;
    sessions(user: User, ctx: any, args: UserSessionsArgs): Promise<Session[]>;
    Coach(user: User, ctx: any): Promise<Coach | null>;
    Athlete(user: User, ctx: any): Promise<Athlete | null>;
    Admin(user: User, ctx: any): Promise<Admin | null>;
}
