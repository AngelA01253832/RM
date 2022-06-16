import { AdminCountAggregate } from "../outputs/AdminCountAggregate";
import { AdminMaxAggregate } from "../outputs/AdminMaxAggregate";
import { AdminMinAggregate } from "../outputs/AdminMinAggregate";
export declare class AdminGroupBy {
    id: string;
    name: string;
    lastname: string;
    schoolId: string;
    gender: "Hombre" | "Mujer";
    userId: string;
    _count: AdminCountAggregate | null;
    _min: AdminMinAggregate | null;
    _max: AdminMaxAggregate | null;
}
