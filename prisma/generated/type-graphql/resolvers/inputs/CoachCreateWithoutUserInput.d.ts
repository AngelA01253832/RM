import { GlobalWorkoutCreateNestedManyWithoutCoachInput } from "../inputs/GlobalWorkoutCreateNestedManyWithoutCoachInput";
import { WorkoutToDoCreateNestedManyWithoutCoachInput } from "../inputs/WorkoutToDoCreateNestedManyWithoutCoachInput";
export declare class CoachCreateWithoutUserInput {
    id?: string | undefined;
    name: string;
    lastname: string;
    schoolId: string;
    description: string;
    scheduler: string;
    KnowTrainer: string;
    gender: "Hombre" | "Mujer";
    status: "Negado" | "Autorizado";
    WorkoutToDo?: WorkoutToDoCreateNestedManyWithoutCoachInput | undefined;
    GlobalWorkout?: GlobalWorkoutCreateNestedManyWithoutCoachInput | undefined;
}
