import { GlobalWorkoutCountAggregate } from "../outputs/GlobalWorkoutCountAggregate";
import { GlobalWorkoutMaxAggregate } from "../outputs/GlobalWorkoutMaxAggregate";
import { GlobalWorkoutMinAggregate } from "../outputs/GlobalWorkoutMinAggregate";
export declare class GlobalWorkoutGroupBy {
    id: string;
    indications: string;
    goal: string;
    goalvalue: "Tiempo" | "Calorias" | "Distancia";
    coachId: string;
    _count: GlobalWorkoutCountAggregate | null;
    _min: GlobalWorkoutMinAggregate | null;
    _max: GlobalWorkoutMaxAggregate | null;
}
