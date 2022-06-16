"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightUpdateManyWithoutAthleteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WeightCreateManyAthleteInputEnvelope_1 = require("../inputs/WeightCreateManyAthleteInputEnvelope");
const WeightCreateOrConnectWithoutAthleteInput_1 = require("../inputs/WeightCreateOrConnectWithoutAthleteInput");
const WeightCreateWithoutAthleteInput_1 = require("../inputs/WeightCreateWithoutAthleteInput");
const WeightScalarWhereInput_1 = require("../inputs/WeightScalarWhereInput");
const WeightUpdateManyWithWhereWithoutAthleteInput_1 = require("../inputs/WeightUpdateManyWithWhereWithoutAthleteInput");
const WeightUpdateWithWhereUniqueWithoutAthleteInput_1 = require("../inputs/WeightUpdateWithWhereUniqueWithoutAthleteInput");
const WeightUpsertWithWhereUniqueWithoutAthleteInput_1 = require("../inputs/WeightUpsertWithWhereUniqueWithoutAthleteInput");
const WeightWhereUniqueInput_1 = require("../inputs/WeightWhereUniqueInput");
let WeightUpdateManyWithoutAthleteInput = class WeightUpdateManyWithoutAthleteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WeightCreateWithoutAthleteInput_1.WeightCreateWithoutAthleteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WeightUpdateManyWithoutAthleteInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WeightCreateOrConnectWithoutAthleteInput_1.WeightCreateOrConnectWithoutAthleteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WeightUpdateManyWithoutAthleteInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WeightUpsertWithWhereUniqueWithoutAthleteInput_1.WeightUpsertWithWhereUniqueWithoutAthleteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WeightUpdateManyWithoutAthleteInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightCreateManyAthleteInputEnvelope_1.WeightCreateManyAthleteInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WeightCreateManyAthleteInputEnvelope_1.WeightCreateManyAthleteInputEnvelope)
], WeightUpdateManyWithoutAthleteInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WeightWhereUniqueInput_1.WeightWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WeightUpdateManyWithoutAthleteInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WeightWhereUniqueInput_1.WeightWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WeightUpdateManyWithoutAthleteInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WeightWhereUniqueInput_1.WeightWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WeightUpdateManyWithoutAthleteInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WeightWhereUniqueInput_1.WeightWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WeightUpdateManyWithoutAthleteInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WeightUpdateWithWhereUniqueWithoutAthleteInput_1.WeightUpdateWithWhereUniqueWithoutAthleteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WeightUpdateManyWithoutAthleteInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WeightUpdateManyWithWhereWithoutAthleteInput_1.WeightUpdateManyWithWhereWithoutAthleteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WeightUpdateManyWithoutAthleteInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WeightScalarWhereInput_1.WeightScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WeightUpdateManyWithoutAthleteInput.prototype, "deleteMany", void 0);
WeightUpdateManyWithoutAthleteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WeightUpdateManyWithoutAthleteInput", {
        isAbstract: true
    })
], WeightUpdateManyWithoutAthleteInput);
exports.WeightUpdateManyWithoutAthleteInput = WeightUpdateManyWithoutAthleteInput;
