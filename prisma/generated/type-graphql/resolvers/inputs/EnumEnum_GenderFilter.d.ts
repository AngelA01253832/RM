import { NestedEnumEnum_GenderFilter } from "../inputs/NestedEnumEnum_GenderFilter";
export declare class EnumEnum_GenderFilter {
    equals?: "Hombre" | "Mujer" | undefined;
    in?: Array<"Hombre" | "Mujer"> | undefined;
    notIn?: Array<"Hombre" | "Mujer"> | undefined;
    not?: NestedEnumEnum_GenderFilter | undefined;
}
