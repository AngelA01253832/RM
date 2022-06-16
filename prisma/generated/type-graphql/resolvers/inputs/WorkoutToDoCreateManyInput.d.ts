export declare class WorkoutToDoCreateManyInput {
    id?: string | undefined;
    date: Date;
    goal: "Tiempo" | "Calorias" | "Distancia";
    coachId: string;
    athleteId: string;
}
