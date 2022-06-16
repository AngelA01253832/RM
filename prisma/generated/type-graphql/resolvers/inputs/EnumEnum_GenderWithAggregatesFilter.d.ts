import { NestedEnumEnum_GenderFilter } from "../inputs/NestedEnumEnum_GenderFilter";
import { NestedEnumEnum_GenderWithAggregatesFilter } from "../inputs/NestedEnumEnum_GenderWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumEnum_GenderWithAggregatesFilter {
    equals?: "Hombre" | "Mujer" | undefined;
    in?: Array<"Hombre" | "Mujer"> | undefined;
    notIn?: Array<"Hombre" | "Mujer"> | undefined;
    not?: NestedEnumEnum_GenderWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumEnum_GenderFilter | undefined;
    _max?: NestedEnumEnum_GenderFilter | undefined;
}
