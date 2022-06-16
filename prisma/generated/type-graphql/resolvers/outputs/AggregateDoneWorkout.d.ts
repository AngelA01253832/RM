import { DoneWorkoutAvgAggregate } from "../outputs/DoneWorkoutAvgAggregate";
import { DoneWorkoutCountAggregate } from "../outputs/DoneWorkoutCountAggregate";
import { DoneWorkoutMaxAggregate } from "../outputs/DoneWorkoutMaxAggregate";
import { DoneWorkoutMinAggregate } from "../outputs/DoneWorkoutMinAggregate";
import { DoneWorkoutSumAggregate } from "../outputs/DoneWorkoutSumAggregate";
export declare class AggregateDoneWorkout {
    _count: DoneWorkoutCountAggregate | null;
    _avg: DoneWorkoutAvgAggregate | null;
    _sum: DoneWorkoutSumAggregate | null;
    _min: DoneWorkoutMinAggregate | null;
    _max: DoneWorkoutMaxAggregate | null;
}
