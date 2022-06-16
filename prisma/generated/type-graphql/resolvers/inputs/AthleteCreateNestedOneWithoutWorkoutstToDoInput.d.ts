import { AthleteCreateOrConnectWithoutWorkoutstToDoInput } from "../inputs/AthleteCreateOrConnectWithoutWorkoutstToDoInput";
import { AthleteCreateWithoutWorkoutstToDoInput } from "../inputs/AthleteCreateWithoutWorkoutstToDoInput";
import { AthleteWhereUniqueInput } from "../inputs/AthleteWhereUniqueInput";
export declare class AthleteCreateNestedOneWithoutWorkoutstToDoInput {
    create?: AthleteCreateWithoutWorkoutstToDoInput | undefined;
    connectOrCreate?: AthleteCreateOrConnectWithoutWorkoutstToDoInput | undefined;
    connect?: AthleteWhereUniqueInput | undefined;
}
