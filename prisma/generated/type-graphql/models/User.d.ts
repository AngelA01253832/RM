import { Account } from "../models/Account";
import { Admin } from "../models/Admin";
import { Athlete } from "../models/Athlete";
import { Coach } from "../models/Coach";
import { Session } from "../models/Session";
import { UserCount } from "../resolvers/outputs/UserCount";
export declare class User {
    id: string;
    name?: string | null;
    email?: string | null;
    emailVerified?: Date | null;
    image?: string | null;
    accounts?: Account[];
    sessions?: Session[];
    Coach?: Coach | null;
    Athlete?: Athlete | null;
    Admin?: Admin | null;
    _count?: UserCount | null;
}
