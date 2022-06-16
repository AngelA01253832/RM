"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoneWorkoutUpdateManyWithoutAthleteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DoneWorkoutCreateManyAthleteInputEnvelope_1 = require("../inputs/DoneWorkoutCreateManyAthleteInputEnvelope");
const DoneWorkoutCreateOrConnectWithoutAthleteInput_1 = require("../inputs/DoneWorkoutCreateOrConnectWithoutAthleteInput");
const DoneWorkoutCreateWithoutAthleteInput_1 = require("../inputs/DoneWorkoutCreateWithoutAthleteInput");
const DoneWorkoutScalarWhereInput_1 = require("../inputs/DoneWorkoutScalarWhereInput");
const DoneWorkoutUpdateManyWithWhereWithoutAthleteInput_1 = require("../inputs/DoneWorkoutUpdateManyWithWhereWithoutAthleteInput");
const DoneWorkoutUpdateWithWhereUniqueWithoutAthleteInput_1 = require("../inputs/DoneWorkoutUpdateWithWhereUniqueWithoutAthleteInput");
const DoneWorkoutUpsertWithWhereUniqueWithoutAthleteInput_1 = require("../inputs/DoneWorkoutUpsertWithWhereUniqueWithoutAthleteInput");
const DoneWorkoutWhereUniqueInput_1 = require("../inputs/DoneWorkoutWhereUniqueInput");
let DoneWorkoutUpdateManyWithoutAthleteInput = class DoneWorkoutUpdateManyWithoutAthleteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DoneWorkoutCreateWithoutAthleteInput_1.DoneWorkoutCreateWithoutAthleteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DoneWorkoutUpdateManyWithoutAthleteInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DoneWorkoutCreateOrConnectWithoutAthleteInput_1.DoneWorkoutCreateOrConnectWithoutAthleteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DoneWorkoutUpdateManyWithoutAthleteInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DoneWorkoutUpsertWithWhereUniqueWithoutAthleteInput_1.DoneWorkoutUpsertWithWhereUniqueWithoutAthleteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DoneWorkoutUpdateManyWithoutAthleteInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutCreateManyAthleteInputEnvelope_1.DoneWorkoutCreateManyAthleteInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DoneWorkoutCreateManyAthleteInputEnvelope_1.DoneWorkoutCreateManyAthleteInputEnvelope)
], DoneWorkoutUpdateManyWithoutAthleteInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DoneWorkoutWhereUniqueInput_1.DoneWorkoutWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DoneWorkoutUpdateManyWithoutAthleteInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DoneWorkoutWhereUniqueInput_1.DoneWorkoutWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DoneWorkoutUpdateManyWithoutAthleteInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DoneWorkoutWhereUniqueInput_1.DoneWorkoutWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DoneWorkoutUpdateManyWithoutAthleteInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DoneWorkoutWhereUniqueInput_1.DoneWorkoutWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DoneWorkoutUpdateManyWithoutAthleteInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DoneWorkoutUpdateWithWhereUniqueWithoutAthleteInput_1.DoneWorkoutUpdateWithWhereUniqueWithoutAthleteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DoneWorkoutUpdateManyWithoutAthleteInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DoneWorkoutUpdateManyWithWhereWithoutAthleteInput_1.DoneWorkoutUpdateManyWithWhereWithoutAthleteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DoneWorkoutUpdateManyWithoutAthleteInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DoneWorkoutScalarWhereInput_1.DoneWorkoutScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DoneWorkoutUpdateManyWithoutAthleteInput.prototype, "deleteMany", void 0);
DoneWorkoutUpdateManyWithoutAthleteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DoneWorkoutUpdateManyWithoutAthleteInput", {
        isAbstract: true
    })
], DoneWorkoutUpdateManyWithoutAthleteInput);
exports.DoneWorkoutUpdateManyWithoutAthleteInput = DoneWorkoutUpdateManyWithoutAthleteInput;
