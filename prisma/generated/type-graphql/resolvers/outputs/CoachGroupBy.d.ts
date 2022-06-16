import { CoachCountAggregate } from "../outputs/CoachCountAggregate";
import { CoachMaxAggregate } from "../outputs/CoachMaxAggregate";
import { CoachMinAggregate } from "../outputs/CoachMinAggregate";
export declare class CoachGroupBy {
    id: string;
    name: string;
    lastname: string;
    schoolId: string;
    description: string;
    gender: "Hombre" | "Mujer";
    status: "Negado" | "Autorizado";
    userId: string;
    _count: CoachCountAggregate | null;
    _min: CoachMinAggregate | null;
    _max: CoachMaxAggregate | null;
}
