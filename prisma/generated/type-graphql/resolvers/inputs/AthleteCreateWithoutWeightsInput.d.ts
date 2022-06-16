import { DoneWorkoutCreateNestedManyWithoutAthleteInput } from "../inputs/DoneWorkoutCreateNestedManyWithoutAthleteInput";
import { UserCreateNestedOneWithoutAthleteInput } from "../inputs/UserCreateNestedOneWithoutAthleteInput";
import { WorkoutToDoCreateNestedManyWithoutAthleteInput } from "../inputs/WorkoutToDoCreateNestedManyWithoutAthleteInput";
export declare class AthleteCreateWithoutWeightsInput {
    id?: string | undefined;
    name: string;
    lastname: string;
    schoolId: string;
    gender: "Hombre" | "Mujer";
    height: number;
    user: UserCreateNestedOneWithoutAthleteInput;
    DoneWorkouts?: DoneWorkoutCreateNestedManyWithoutAthleteInput | undefined;
    WorkoutstToDo?: WorkoutToDoCreateNestedManyWithoutAthleteInput | undefined;
}
