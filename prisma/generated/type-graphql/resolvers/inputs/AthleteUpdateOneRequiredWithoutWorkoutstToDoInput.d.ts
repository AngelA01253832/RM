import { AthleteCreateOrConnectWithoutWorkoutstToDoInput } from "../inputs/AthleteCreateOrConnectWithoutWorkoutstToDoInput";
import { AthleteCreateWithoutWorkoutstToDoInput } from "../inputs/AthleteCreateWithoutWorkoutstToDoInput";
import { AthleteUpdateWithoutWorkoutstToDoInput } from "../inputs/AthleteUpdateWithoutWorkoutstToDoInput";
import { AthleteUpsertWithoutWorkoutstToDoInput } from "../inputs/AthleteUpsertWithoutWorkoutstToDoInput";
import { AthleteWhereUniqueInput } from "../inputs/AthleteWhereUniqueInput";
export declare class AthleteUpdateOneRequiredWithoutWorkoutstToDoInput {
    create?: AthleteCreateWithoutWorkoutstToDoInput | undefined;
    connectOrCreate?: AthleteCreateOrConnectWithoutWorkoutstToDoInput | undefined;
    upsert?: AthleteUpsertWithoutWorkoutstToDoInput | undefined;
    connect?: AthleteWhereUniqueInput | undefined;
    update?: AthleteUpdateWithoutWorkoutstToDoInput | undefined;
}
