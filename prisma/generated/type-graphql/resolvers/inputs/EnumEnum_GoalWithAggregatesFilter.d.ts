import { NestedEnumEnum_GoalFilter } from "../inputs/NestedEnumEnum_GoalFilter";
import { NestedEnumEnum_GoalWithAggregatesFilter } from "../inputs/NestedEnumEnum_GoalWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumEnum_GoalWithAggregatesFilter {
    equals?: "Tiempo" | "Calorias" | "Distancia" | undefined;
    in?: Array<"Tiempo" | "Calorias" | "Distancia"> | undefined;
    notIn?: Array<"Tiempo" | "Calorias" | "Distancia"> | undefined;
    not?: NestedEnumEnum_GoalWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumEnum_GoalFilter | undefined;
    _max?: NestedEnumEnum_GoalFilter | undefined;
}
