import { DoneWorkoutCreateNestedManyWithoutAthleteInput } from "../inputs/DoneWorkoutCreateNestedManyWithoutAthleteInput";
import { UserCreateNestedOneWithoutAthleteInput } from "../inputs/UserCreateNestedOneWithoutAthleteInput";
import { WeightCreateNestedManyWithoutAthleteInput } from "../inputs/WeightCreateNestedManyWithoutAthleteInput";
export declare class AthleteCreateWithoutWorkoutstToDoInput {
    id?: string | undefined;
    name: string;
    lastname: string;
    schoolId: string;
    gender: "Hombre" | "Mujer";
    height: number;
    user: UserCreateNestedOneWithoutAthleteInput;
    Weights?: WeightCreateNestedManyWithoutAthleteInput | undefined;
    DoneWorkouts?: DoneWorkoutCreateNestedManyWithoutAthleteInput | undefined;
}
