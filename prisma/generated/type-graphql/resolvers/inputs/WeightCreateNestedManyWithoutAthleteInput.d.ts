import { WeightCreateManyAthleteInputEnvelope } from "../inputs/WeightCreateManyAthleteInputEnvelope";
import { WeightCreateOrConnectWithoutAthleteInput } from "../inputs/WeightCreateOrConnectWithoutAthleteInput";
import { WeightCreateWithoutAthleteInput } from "../inputs/WeightCreateWithoutAthleteInput";
import { WeightWhereUniqueInput } from "../inputs/WeightWhereUniqueInput";
export declare class WeightCreateNestedManyWithoutAthleteInput {
    create?: WeightCreateWithoutAthleteInput[] | undefined;
    connectOrCreate?: WeightCreateOrConnectWithoutAthleteInput[] | undefined;
    createMany?: WeightCreateManyAthleteInputEnvelope | undefined;
    connect?: WeightWhereUniqueInput[] | undefined;
}
