export declare class WorkoutToDoCreateManyInput {
    id?: string | undefined;
    date: Date;
    indications: string;
    goal: "Tiempo" | "Calorias" | "Distancia";
    goalvalue: number;
    coachId: string;
    athleteId: string;
}
