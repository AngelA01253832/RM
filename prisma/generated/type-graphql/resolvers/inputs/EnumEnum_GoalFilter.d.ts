import { NestedEnumEnum_GoalFilter } from "../inputs/NestedEnumEnum_GoalFilter";
export declare class EnumEnum_GoalFilter {
    equals?: "Tiempo" | "Calorias" | "Distancia" | undefined;
    in?: Array<"Tiempo" | "Calorias" | "Distancia"> | undefined;
    notIn?: Array<"Tiempo" | "Calorias" | "Distancia"> | undefined;
    not?: NestedEnumEnum_GoalFilter | undefined;
}
