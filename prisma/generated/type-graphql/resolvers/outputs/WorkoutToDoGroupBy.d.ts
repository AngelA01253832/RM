import { WorkoutToDoAvgAggregate } from "../outputs/WorkoutToDoAvgAggregate";
import { WorkoutToDoCountAggregate } from "../outputs/WorkoutToDoCountAggregate";
import { WorkoutToDoMaxAggregate } from "../outputs/WorkoutToDoMaxAggregate";
import { WorkoutToDoMinAggregate } from "../outputs/WorkoutToDoMinAggregate";
import { WorkoutToDoSumAggregate } from "../outputs/WorkoutToDoSumAggregate";
export declare class WorkoutToDoGroupBy {
    id: string;
    date: Date;
    indications: string;
    goal: "Tiempo" | "Calorias" | "Distancia";
    goalvalue: number;
    coachId: string;
    athleteId: string;
    _count: WorkoutToDoCountAggregate | null;
    _avg: WorkoutToDoAvgAggregate | null;
    _sum: WorkoutToDoSumAggregate | null;
    _min: WorkoutToDoMinAggregate | null;
    _max: WorkoutToDoMaxAggregate | null;
}
