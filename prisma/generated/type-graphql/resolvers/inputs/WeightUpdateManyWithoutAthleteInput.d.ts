import { WeightCreateManyAthleteInputEnvelope } from "../inputs/WeightCreateManyAthleteInputEnvelope";
import { WeightCreateOrConnectWithoutAthleteInput } from "../inputs/WeightCreateOrConnectWithoutAthleteInput";
import { WeightCreateWithoutAthleteInput } from "../inputs/WeightCreateWithoutAthleteInput";
import { WeightScalarWhereInput } from "../inputs/WeightScalarWhereInput";
import { WeightUpdateManyWithWhereWithoutAthleteInput } from "../inputs/WeightUpdateManyWithWhereWithoutAthleteInput";
import { WeightUpdateWithWhereUniqueWithoutAthleteInput } from "../inputs/WeightUpdateWithWhereUniqueWithoutAthleteInput";
import { WeightUpsertWithWhereUniqueWithoutAthleteInput } from "../inputs/WeightUpsertWithWhereUniqueWithoutAthleteInput";
import { WeightWhereUniqueInput } from "../inputs/WeightWhereUniqueInput";
export declare class WeightUpdateManyWithoutAthleteInput {
    create?: WeightCreateWithoutAthleteInput[] | undefined;
    connectOrCreate?: WeightCreateOrConnectWithoutAthleteInput[] | undefined;
    upsert?: WeightUpsertWithWhereUniqueWithoutAthleteInput[] | undefined;
    createMany?: WeightCreateManyAthleteInputEnvelope | undefined;
    set?: WeightWhereUniqueInput[] | undefined;
    disconnect?: WeightWhereUniqueInput[] | undefined;
    delete?: WeightWhereUniqueInput[] | undefined;
    connect?: WeightWhereUniqueInput[] | undefined;
    update?: WeightUpdateWithWhereUniqueWithoutAthleteInput[] | undefined;
    updateMany?: WeightUpdateManyWithWhereWithoutAthleteInput[] | undefined;
    deleteMany?: WeightScalarWhereInput[] | undefined;
}
