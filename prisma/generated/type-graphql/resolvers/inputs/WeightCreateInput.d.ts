import { AthleteCreateNestedOneWithoutWeightsInput } from "../inputs/AthleteCreateNestedOneWithoutWeightsInput";
export declare class WeightCreateInput {
    id?: string | undefined;
    weight: number;
    athlete: AthleteCreateNestedOneWithoutWeightsInput;
    date: Date;
}
