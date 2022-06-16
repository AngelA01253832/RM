import { WorkoutToDoCreateNestedManyWithoutCoachInput } from "../inputs/WorkoutToDoCreateNestedManyWithoutCoachInput";
export declare class CoachCreateWithoutUserInput {
    id?: string | undefined;
    name: string;
    lastname: string;
    schoolId: string;
    description: string;
    gender: "Hombre" | "Mujer";
    status: "Negado" | "Autorizado";
    WorkoutToDo?: WorkoutToDoCreateNestedManyWithoutCoachInput | undefined;
}
