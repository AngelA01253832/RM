import { CoachCountAggregate } from "../outputs/CoachCountAggregate";
import { CoachMaxAggregate } from "../outputs/CoachMaxAggregate";
import { CoachMinAggregate } from "../outputs/CoachMinAggregate";
export declare class AggregateCoach {
    _count: CoachCountAggregate | null;
    _min: CoachMinAggregate | null;
    _max: CoachMaxAggregate | null;
}
