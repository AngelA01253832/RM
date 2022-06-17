export declare class WorkoutToDoCreateManyCoachInput {
    id?: string | undefined;
    date: Date;
    indications: string;
    goal: "Tiempo" | "Calorias" | "Distancia";
    goalvalue: number;
    athleteId: string;
}
