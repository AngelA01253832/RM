import { AthleteAvgAggregate } from "../outputs/AthleteAvgAggregate";
import { AthleteCountAggregate } from "../outputs/AthleteCountAggregate";
import { AthleteMaxAggregate } from "../outputs/AthleteMaxAggregate";
import { AthleteMinAggregate } from "../outputs/AthleteMinAggregate";
import { AthleteSumAggregate } from "../outputs/AthleteSumAggregate";
export declare class AggregateAthlete {
    _count: AthleteCountAggregate | null;
    _avg: AthleteAvgAggregate | null;
    _sum: AthleteSumAggregate | null;
    _min: AthleteMinAggregate | null;
    _max: AthleteMaxAggregate | null;
}
