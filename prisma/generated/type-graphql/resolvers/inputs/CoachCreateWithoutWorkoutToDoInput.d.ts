import { GlobalWorkoutCreateNestedManyWithoutCoachInput } from "../inputs/GlobalWorkoutCreateNestedManyWithoutCoachInput";
import { UserCreateNestedOneWithoutCoachInput } from "../inputs/UserCreateNestedOneWithoutCoachInput";
export declare class CoachCreateWithoutWorkoutToDoInput {
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
    GlobalWorkout?: GlobalWorkoutCreateNestedManyWithoutCoachInput | undefined;
}
