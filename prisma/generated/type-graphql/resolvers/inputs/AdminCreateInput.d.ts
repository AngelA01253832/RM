import { UserCreateNestedOneWithoutAdminInput } from "../inputs/UserCreateNestedOneWithoutAdminInput";
export declare class AdminCreateInput {
    id?: string | undefined;
    name: string;
    lastname: string;
    schoolId: string;
    user: UserCreateNestedOneWithoutAdminInput;
    gender: "Hombre" | "Mujer";
}
