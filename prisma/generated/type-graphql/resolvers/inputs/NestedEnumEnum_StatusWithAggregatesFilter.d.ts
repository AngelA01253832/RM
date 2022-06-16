import { NestedEnumEnum_StatusFilter } from "../inputs/NestedEnumEnum_StatusFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumEnum_StatusWithAggregatesFilter {
    equals?: "Negado" | "Autorizado" | undefined;
    in?: Array<"Negado" | "Autorizado"> | undefined;
    notIn?: Array<"Negado" | "Autorizado"> | undefined;
    not?: NestedEnumEnum_StatusWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumEnum_StatusFilter | undefined;
    _max?: NestedEnumEnum_StatusFilter | undefined;
}
