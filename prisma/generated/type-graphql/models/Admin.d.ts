import { User } from "../models/User";
export declare class Admin {
    id: string;
    name: string;
    lastname: string;
    schoolId: string;
    user?: User;
    gender: "Hombre" | "Mujer";
    userId: string;
}
