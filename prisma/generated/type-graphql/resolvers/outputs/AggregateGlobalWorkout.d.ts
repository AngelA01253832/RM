import { GlobalWorkoutCountAggregate } from "../outputs/GlobalWorkoutCountAggregate";
import { GlobalWorkoutMaxAggregate } from "../outputs/GlobalWorkoutMaxAggregate";
import { GlobalWorkoutMinAggregate } from "../outputs/GlobalWorkoutMinAggregate";
export declare class AggregateGlobalWorkout {
    _count: GlobalWorkoutCountAggregate | null;
    _min: GlobalWorkoutMinAggregate | null;
    _max: GlobalWorkoutMaxAggregate | null;
}
