import { AthleteCreateNestedOneWithoutDoneWorkoutsInput } from "../inputs/AthleteCreateNestedOneWithoutDoneWorkoutsInput";
export declare class DoneWorkoutCreateInput {
    id?: string | undefined;
    athlete: AthleteCreateNestedOneWithoutDoneWorkoutsInput;
    date: Date;
    calories: number;
    time: number;
    distance: number;
    intensity: number;
}
