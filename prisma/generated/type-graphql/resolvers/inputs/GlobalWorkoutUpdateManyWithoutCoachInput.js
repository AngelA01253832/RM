"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalWorkoutUpdateManyWithoutCoachInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GlobalWorkoutCreateManyCoachInputEnvelope_1 = require("../inputs/GlobalWorkoutCreateManyCoachInputEnvelope");
const GlobalWorkoutCreateOrConnectWithoutCoachInput_1 = require("../inputs/GlobalWorkoutCreateOrConnectWithoutCoachInput");
const GlobalWorkoutCreateWithoutCoachInput_1 = require("../inputs/GlobalWorkoutCreateWithoutCoachInput");
const GlobalWorkoutScalarWhereInput_1 = require("../inputs/GlobalWorkoutScalarWhereInput");
const GlobalWorkoutUpdateManyWithWhereWithoutCoachInput_1 = require("../inputs/GlobalWorkoutUpdateManyWithWhereWithoutCoachInput");
const GlobalWorkoutUpdateWithWhereUniqueWithoutCoachInput_1 = require("../inputs/GlobalWorkoutUpdateWithWhereUniqueWithoutCoachInput");
const GlobalWorkoutUpsertWithWhereUniqueWithoutCoachInput_1 = require("../inputs/GlobalWorkoutUpsertWithWhereUniqueWithoutCoachInput");
const GlobalWorkoutWhereUniqueInput_1 = require("../inputs/GlobalWorkoutWhereUniqueInput");
let GlobalWorkoutUpdateManyWithoutCoachInput = class GlobalWorkoutUpdateManyWithoutCoachInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GlobalWorkoutCreateWithoutCoachInput_1.GlobalWorkoutCreateWithoutCoachInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GlobalWorkoutUpdateManyWithoutCoachInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GlobalWorkoutCreateOrConnectWithoutCoachInput_1.GlobalWorkoutCreateOrConnectWithoutCoachInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GlobalWorkoutUpdateManyWithoutCoachInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GlobalWorkoutUpsertWithWhereUniqueWithoutCoachInput_1.GlobalWorkoutUpsertWithWhereUniqueWithoutCoachInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GlobalWorkoutUpdateManyWithoutCoachInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlobalWorkoutCreateManyCoachInputEnvelope_1.GlobalWorkoutCreateManyCoachInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlobalWorkoutCreateManyCoachInputEnvelope_1.GlobalWorkoutCreateManyCoachInputEnvelope)
], GlobalWorkoutUpdateManyWithoutCoachInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GlobalWorkoutWhereUniqueInput_1.GlobalWorkoutWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GlobalWorkoutUpdateManyWithoutCoachInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GlobalWorkoutWhereUniqueInput_1.GlobalWorkoutWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GlobalWorkoutUpdateManyWithoutCoachInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GlobalWorkoutWhereUniqueInput_1.GlobalWorkoutWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GlobalWorkoutUpdateManyWithoutCoachInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GlobalWorkoutWhereUniqueInput_1.GlobalWorkoutWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GlobalWorkoutUpdateManyWithoutCoachInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GlobalWorkoutUpdateWithWhereUniqueWithoutCoachInput_1.GlobalWorkoutUpdateWithWhereUniqueWithoutCoachInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GlobalWorkoutUpdateManyWithoutCoachInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GlobalWorkoutUpdateManyWithWhereWithoutCoachInput_1.GlobalWorkoutUpdateManyWithWhereWithoutCoachInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GlobalWorkoutUpdateManyWithoutCoachInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GlobalWorkoutScalarWhereInput_1.GlobalWorkoutScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GlobalWorkoutUpdateManyWithoutCoachInput.prototype, "deleteMany", void 0);
GlobalWorkoutUpdateManyWithoutCoachInput = tslib_1.__decorate([
    TypeGraphQL.InputType("GlobalWorkoutUpdateManyWithoutCoachInput", {
        isAbstract: true
    })
], GlobalWorkoutUpdateManyWithoutCoachInput);
exports.GlobalWorkoutUpdateManyWithoutCoachInput = GlobalWorkoutUpdateManyWithoutCoachInput;
