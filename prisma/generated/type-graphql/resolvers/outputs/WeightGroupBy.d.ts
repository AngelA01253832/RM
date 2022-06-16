import { WeightAvgAggregate } from "../outputs/WeightAvgAggregate";
import { WeightCountAggregate } from "../outputs/WeightCountAggregate";
import { WeightMaxAggregate } from "../outputs/WeightMaxAggregate";
import { WeightMinAggregate } from "../outputs/WeightMinAggregate";
import { WeightSumAggregate } from "../outputs/WeightSumAggregate";
export declare class WeightGroupBy {
    id: string;
    weight: number;
    date: Date;
    athleteId: string;
    _count: WeightCountAggregate | null;
    _avg: WeightAvgAggregate | null;
    _sum: WeightSumAggregate | null;
    _min: WeightMinAggregate | null;
    _max: WeightMaxAggregate | null;
}
