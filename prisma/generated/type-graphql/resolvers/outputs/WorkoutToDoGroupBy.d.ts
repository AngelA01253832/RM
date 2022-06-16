import { WorkoutToDoCountAggregate } from "../outputs/WorkoutToDoCountAggregate";
import { WorkoutToDoMaxAggregate } from "../outputs/WorkoutToDoMaxAggregate";
import { WorkoutToDoMinAggregate } from "../outputs/WorkoutToDoMinAggregate";
export declare class WorkoutToDoGroupBy {
    id: string;
    date: Date;
    goal: "Tiempo" | "Calorias" | "Distancia";
    coachId: string;
    athleteId: string;
    _count: WorkoutToDoCountAggregate | null;
    _min: WorkoutToDoMinAggregate | null;
    _max: WorkoutToDoMaxAggregate | null;
}
