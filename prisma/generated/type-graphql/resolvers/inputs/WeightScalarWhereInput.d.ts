import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class WeightScalarWhereInput {
    AND?: WeightScalarWhereInput[] | undefined;
    OR?: WeightScalarWhereInput[] | undefined;
    NOT?: WeightScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    weight?: FloatFilter | undefined;
    date?: DateTimeFilter | undefined;
    athleteId?: StringFilter | undefined;
}
