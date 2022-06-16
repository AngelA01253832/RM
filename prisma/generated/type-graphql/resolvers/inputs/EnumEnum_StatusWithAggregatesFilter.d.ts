import { NestedEnumEnum_StatusFilter } from "../inputs/NestedEnumEnum_StatusFilter";
import { NestedEnumEnum_StatusWithAggregatesFilter } from "../inputs/NestedEnumEnum_StatusWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumEnum_StatusWithAggregatesFilter {
    equals?: "Negado" | "Autorizado" | undefined;
    in?: Array<"Negado" | "Autorizado"> | undefined;
    notIn?: Array<"Negado" | "Autorizado"> | undefined;
    not?: NestedEnumEnum_StatusWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumEnum_StatusFilter | undefined;
    _max?: NestedEnumEnum_StatusFilter | undefined;
}
