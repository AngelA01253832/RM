"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoneWorkoutCreateNestedManyWithoutAthleteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DoneWorkoutCreateManyAthleteInputEnvelope_1 = require("../inputs/DoneWorkoutCreateManyAthleteInputEnvelope");
const DoneWorkoutCreateOrConnectWithoutAthleteInput_1 = require("../inputs/DoneWorkoutCreateOrConnectWithoutAthleteInput");
const DoneWorkoutCreateWithoutAthleteInput_1 = require("../inputs/DoneWorkoutCreateWithoutAthleteInput");
const DoneWorkoutWhereUniqueInput_1 = require("../inputs/DoneWorkoutWhereUniqueInput");
let DoneWorkoutCreateNestedManyWithoutAthleteInput = class DoneWorkoutCreateNestedManyWithoutAthleteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DoneWorkoutCreateWithoutAthleteInput_1.DoneWorkoutCreateWithoutAthleteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DoneWorkoutCreateNestedManyWithoutAthleteInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DoneWorkoutCreateOrConnectWithoutAthleteInput_1.DoneWorkoutCreateOrConnectWithoutAthleteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DoneWorkoutCreateNestedManyWithoutAthleteInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutCreateManyAthleteInputEnvelope_1.DoneWorkoutCreateManyAthleteInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DoneWorkoutCreateManyAthleteInputEnvelope_1.DoneWorkoutCreateManyAthleteInputEnvelope)
], DoneWorkoutCreateNestedManyWithoutAthleteInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DoneWorkoutWhereUniqueInput_1.DoneWorkoutWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DoneWorkoutCreateNestedManyWithoutAthleteInput.prototype, "connect", void 0);
DoneWorkoutCreateNestedManyWithoutAthleteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DoneWorkoutCreateNestedManyWithoutAthleteInput", {
        isAbstract: true
    })
], DoneWorkoutCreateNestedManyWithoutAthleteInput);
exports.DoneWorkoutCreateNestedManyWithoutAthleteInput = DoneWorkoutCreateNestedManyWithoutAthleteInput;
