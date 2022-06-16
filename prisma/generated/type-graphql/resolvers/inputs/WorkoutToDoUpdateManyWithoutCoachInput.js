"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutToDoUpdateManyWithoutCoachInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkoutToDoCreateManyCoachInputEnvelope_1 = require("../inputs/WorkoutToDoCreateManyCoachInputEnvelope");
const WorkoutToDoCreateOrConnectWithoutCoachInput_1 = require("../inputs/WorkoutToDoCreateOrConnectWithoutCoachInput");
const WorkoutToDoCreateWithoutCoachInput_1 = require("../inputs/WorkoutToDoCreateWithoutCoachInput");
const WorkoutToDoScalarWhereInput_1 = require("../inputs/WorkoutToDoScalarWhereInput");
const WorkoutToDoUpdateManyWithWhereWithoutCoachInput_1 = require("../inputs/WorkoutToDoUpdateManyWithWhereWithoutCoachInput");
const WorkoutToDoUpdateWithWhereUniqueWithoutCoachInput_1 = require("../inputs/WorkoutToDoUpdateWithWhereUniqueWithoutCoachInput");
const WorkoutToDoUpsertWithWhereUniqueWithoutCoachInput_1 = require("../inputs/WorkoutToDoUpsertWithWhereUniqueWithoutCoachInput");
const WorkoutToDoWhereUniqueInput_1 = require("../inputs/WorkoutToDoWhereUniqueInput");
let WorkoutToDoUpdateManyWithoutCoachInput = class WorkoutToDoUpdateManyWithoutCoachInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkoutToDoCreateWithoutCoachInput_1.WorkoutToDoCreateWithoutCoachInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkoutToDoUpdateManyWithoutCoachInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkoutToDoCreateOrConnectWithoutCoachInput_1.WorkoutToDoCreateOrConnectWithoutCoachInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkoutToDoUpdateManyWithoutCoachInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkoutToDoUpsertWithWhereUniqueWithoutCoachInput_1.WorkoutToDoUpsertWithWhereUniqueWithoutCoachInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkoutToDoUpdateManyWithoutCoachInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoCreateManyCoachInputEnvelope_1.WorkoutToDoCreateManyCoachInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkoutToDoCreateManyCoachInputEnvelope_1.WorkoutToDoCreateManyCoachInputEnvelope)
], WorkoutToDoUpdateManyWithoutCoachInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkoutToDoWhereUniqueInput_1.WorkoutToDoWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkoutToDoUpdateManyWithoutCoachInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkoutToDoWhereUniqueInput_1.WorkoutToDoWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkoutToDoUpdateManyWithoutCoachInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkoutToDoWhereUniqueInput_1.WorkoutToDoWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkoutToDoUpdateManyWithoutCoachInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkoutToDoWhereUniqueInput_1.WorkoutToDoWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkoutToDoUpdateManyWithoutCoachInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkoutToDoUpdateWithWhereUniqueWithoutCoachInput_1.WorkoutToDoUpdateWithWhereUniqueWithoutCoachInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkoutToDoUpdateManyWithoutCoachInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkoutToDoUpdateManyWithWhereWithoutCoachInput_1.WorkoutToDoUpdateManyWithWhereWithoutCoachInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkoutToDoUpdateManyWithoutCoachInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkoutToDoScalarWhereInput_1.WorkoutToDoScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkoutToDoUpdateManyWithoutCoachInput.prototype, "deleteMany", void 0);
WorkoutToDoUpdateManyWithoutCoachInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkoutToDoUpdateManyWithoutCoachInput", {
        isAbstract: true
    })
], WorkoutToDoUpdateManyWithoutCoachInput);
exports.WorkoutToDoUpdateManyWithoutCoachInput = WorkoutToDoUpdateManyWithoutCoachInput;
