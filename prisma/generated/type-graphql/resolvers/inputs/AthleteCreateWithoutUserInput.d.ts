import { DoneWorkoutCreateNestedManyWithoutAthleteInput } from "../inputs/DoneWorkoutCreateNestedManyWithoutAthleteInput";
import { WeightCreateNestedManyWithoutAthleteInput } from "../inputs/WeightCreateNestedManyWithoutAthleteInput";
import { WorkoutToDoCreateNestedManyWithoutAthleteInput } from "../inputs/WorkoutToDoCreateNestedManyWithoutAthleteInput";
export declare class AthleteCreateWithoutUserInput {
    id?: string | undefined;
    name: string;
    lastname: string;
    schoolId: string;
    gender: "Hombre" | "Mujer";
    height: number;
    Weights?: WeightCreateNestedManyWithoutAthleteInput | undefined;
    DoneWorkouts?: DoneWorkoutCreateNestedManyWithoutAthleteInput | undefined;
    WorkoutstToDo?: WorkoutToDoCreateNestedManyWithoutAthleteInput | undefined;
}
