"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutToDoUpdateManyWithoutAthleteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkoutToDoCreateManyAthleteInputEnvelope_1 = require("../inputs/WorkoutToDoCreateManyAthleteInputEnvelope");
const WorkoutToDoCreateOrConnectWithoutAthleteInput_1 = require("../inputs/WorkoutToDoCreateOrConnectWithoutAthleteInput");
const WorkoutToDoCreateWithoutAthleteInput_1 = require("../inputs/WorkoutToDoCreateWithoutAthleteInput");
const WorkoutToDoScalarWhereInput_1 = require("../inputs/WorkoutToDoScalarWhereInput");
const WorkoutToDoUpdateManyWithWhereWithoutAthleteInput_1 = require("../inputs/WorkoutToDoUpdateManyWithWhereWithoutAthleteInput");
const WorkoutToDoUpdateWithWhereUniqueWithoutAthleteInput_1 = require("../inputs/WorkoutToDoUpdateWithWhereUniqueWithoutAthleteInput");
const WorkoutToDoUpsertWithWhereUniqueWithoutAthleteInput_1 = require("../inputs/WorkoutToDoUpsertWithWhereUniqueWithoutAthleteInput");
const WorkoutToDoWhereUniqueInput_1 = require("../inputs/WorkoutToDoWhereUniqueInput");
let WorkoutToDoUpdateManyWithoutAthleteInput = class WorkoutToDoUpdateManyWithoutAthleteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkoutToDoCreateWithoutAthleteInput_1.WorkoutToDoCreateWithoutAthleteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkoutToDoUpdateManyWithoutAthleteInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkoutToDoCreateOrConnectWithoutAthleteInput_1.WorkoutToDoCreateOrConnectWithoutAthleteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkoutToDoUpdateManyWithoutAthleteInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkoutToDoUpsertWithWhereUniqueWithoutAthleteInput_1.WorkoutToDoUpsertWithWhereUniqueWithoutAthleteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkoutToDoUpdateManyWithoutAthleteInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoCreateManyAthleteInputEnvelope_1.WorkoutToDoCreateManyAthleteInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkoutToDoCreateManyAthleteInputEnvelope_1.WorkoutToDoCreateManyAthleteInputEnvelope)
], WorkoutToDoUpdateManyWithoutAthleteInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkoutToDoWhereUniqueInput_1.WorkoutToDoWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkoutToDoUpdateManyWithoutAthleteInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkoutToDoWhereUniqueInput_1.WorkoutToDoWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkoutToDoUpdateManyWithoutAthleteInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkoutToDoWhereUniqueInput_1.WorkoutToDoWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkoutToDoUpdateManyWithoutAthleteInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkoutToDoWhereUniqueInput_1.WorkoutToDoWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkoutToDoUpdateManyWithoutAthleteInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkoutToDoUpdateWithWhereUniqueWithoutAthleteInput_1.WorkoutToDoUpdateWithWhereUniqueWithoutAthleteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkoutToDoUpdateManyWithoutAthleteInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkoutToDoUpdateManyWithWhereWithoutAthleteInput_1.WorkoutToDoUpdateManyWithWhereWithoutAthleteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkoutToDoUpdateManyWithoutAthleteInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkoutToDoScalarWhereInput_1.WorkoutToDoScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkoutToDoUpdateManyWithoutAthleteInput.prototype, "deleteMany", void 0);
WorkoutToDoUpdateManyWithoutAthleteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkoutToDoUpdateManyWithoutAthleteInput", {
        isAbstract: true
    })
], WorkoutToDoUpdateManyWithoutAthleteInput);
exports.WorkoutToDoUpdateManyWithoutAthleteInput = WorkoutToDoUpdateManyWithoutAthleteInput;
