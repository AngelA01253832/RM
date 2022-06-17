import { UserCreateNestedOneWithoutCoachInput } from "../inputs/UserCreateNestedOneWithoutCoachInput";
import { WorkoutToDoCreateNestedManyWithoutCoachInput } from "../inputs/WorkoutToDoCreateNestedManyWithoutCoachInput";
export declare class CoachCreateWithoutGlobalWorkoutInput {
    id?: string | undefined;
    name: string;
    lastname: string;
    schoolId: string;
    description: string;
    scheduler: string;
    KnowTrainer: string;
    gender: "Hombre" | "Mujer";
    status: "Negado" | "Autorizado";
    user: UserCreateNestedOneWithoutCoachInput;
    WorkoutToDo?: WorkoutToDoCreateNestedManyWithoutCoachInput | undefined;
}
