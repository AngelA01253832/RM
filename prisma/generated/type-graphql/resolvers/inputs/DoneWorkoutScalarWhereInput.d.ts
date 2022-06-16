import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class DoneWorkoutScalarWhereInput {
    AND?: DoneWorkoutScalarWhereInput[] | undefined;
    OR?: DoneWorkoutScalarWhereInput[] | undefined;
    NOT?: DoneWorkoutScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    date?: DateTimeFilter | undefined;
    calories?: IntFilter | undefined;
    time?: IntFilter | undefined;
    distance?: FloatFilter | undefined;
    intensity?: IntFilter | undefined;
    athleteId?: StringFilter | undefined;
}
