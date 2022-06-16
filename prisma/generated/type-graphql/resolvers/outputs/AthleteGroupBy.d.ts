import { AthleteAvgAggregate } from "../outputs/AthleteAvgAggregate";
import { AthleteCountAggregate } from "../outputs/AthleteCountAggregate";
import { AthleteMaxAggregate } from "../outputs/AthleteMaxAggregate";
import { AthleteMinAggregate } from "../outputs/AthleteMinAggregate";
import { AthleteSumAggregate } from "../outputs/AthleteSumAggregate";
export declare class AthleteGroupBy {
    id: string;
    name: string;
    lastname: string;
    schoolId: string;
    gender: "Hombre" | "Mujer";
    height: number;
    userId: string;
    _count: AthleteCountAggregate | null;
    _avg: AthleteAvgAggregate | null;
    _sum: AthleteSumAggregate | null;
    _min: AthleteMinAggregate | null;
    _max: AthleteMaxAggregate | null;
}
