import { UserCreateNestedOneWithoutAthleteInput } from "../inputs/UserCreateNestedOneWithoutAthleteInput";
import { WeightCreateNestedManyWithoutAthleteInput } from "../inputs/WeightCreateNestedManyWithoutAthleteInput";
import { WorkoutToDoCreateNestedManyWithoutAthleteInput } from "../inputs/WorkoutToDoCreateNestedManyWithoutAthleteInput";
export declare class AthleteCreateWithoutDoneWorkoutsInput {
    id?: string | undefined;
    name: string;
    lastname: string;
    schoolId: string;
    gender: "Hombre" | "Mujer";
    height: number;
    user: UserCreateNestedOneWithoutAthleteInput;
    Weights?: WeightCreateNestedManyWithoutAthleteInput | undefined;
    WorkoutstToDo?: WorkoutToDoCreateNestedManyWithoutAthleteInput | undefined;
}
