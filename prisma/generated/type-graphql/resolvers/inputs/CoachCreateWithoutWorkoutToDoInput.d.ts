import { UserCreateNestedOneWithoutCoachInput } from "../inputs/UserCreateNestedOneWithoutCoachInput";
export declare class CoachCreateWithoutWorkoutToDoInput {
    id?: string | undefined;
    name: string;
    lastname: string;
    schoolId: string;
    description: string;
    gender: "Hombre" | "Mujer";
    status: "Negado" | "Autorizado";
    user: UserCreateNestedOneWithoutCoachInput;
}
