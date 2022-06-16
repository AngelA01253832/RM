import { WorkoutToDoCountAggregate } from "../outputs/WorkoutToDoCountAggregate";
import { WorkoutToDoMaxAggregate } from "../outputs/WorkoutToDoMaxAggregate";
import { WorkoutToDoMinAggregate } from "../outputs/WorkoutToDoMinAggregate";
export declare class AggregateWorkoutToDo {
    _count: WorkoutToDoCountAggregate | null;
    _min: WorkoutToDoMinAggregate | null;
    _max: WorkoutToDoMaxAggregate | null;
}
