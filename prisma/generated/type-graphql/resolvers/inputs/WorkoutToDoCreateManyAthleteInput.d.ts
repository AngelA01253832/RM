export declare class WorkoutToDoCreateManyAthleteInput {
    id?: string | undefined;
    date: Date;
    indications: string;
    goal: "Tiempo" | "Calorias" | "Distancia";
    goalvalue: number;
    coachId: string;
}
