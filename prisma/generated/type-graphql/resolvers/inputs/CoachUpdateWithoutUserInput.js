"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoachUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumEnum_GenderFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_GenderFieldUpdateOperationsInput");
const EnumEnum_StatusFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_StatusFieldUpdateOperationsInput");
const GlobalWorkoutUpdateManyWithoutCoachInput_1 = require("../inputs/GlobalWorkoutUpdateManyWithoutCoachInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const WorkoutToDoUpdateManyWithoutCoachInput_1 = require("../inputs/WorkoutToDoUpdateManyWithoutCoachInput");
let CoachUpdateWithoutUserInput = class CoachUpdateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CoachUpdateWithoutUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CoachUpdateWithoutUserInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CoachUpdateWithoutUserInput.prototype, "lastname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CoachUpdateWithoutUserInput.prototype, "schoolId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CoachUpdateWithoutUserInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CoachUpdateWithoutUserInput.prototype, "scheduler", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CoachUpdateWithoutUserInput.prototype, "KnowTrainer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_GenderFieldUpdateOperationsInput_1.EnumEnum_GenderFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_GenderFieldUpdateOperationsInput_1.EnumEnum_GenderFieldUpdateOperationsInput)
], CoachUpdateWithoutUserInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_StatusFieldUpdateOperationsInput_1.EnumEnum_StatusFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_StatusFieldUpdateOperationsInput_1.EnumEnum_StatusFieldUpdateOperationsInput)
], CoachUpdateWithoutUserInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoUpdateManyWithoutCoachInput_1.WorkoutToDoUpdateManyWithoutCoachInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkoutToDoUpdateManyWithoutCoachInput_1.WorkoutToDoUpdateManyWithoutCoachInput)
], CoachUpdateWithoutUserInput.prototype, "WorkoutToDo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlobalWorkoutUpdateManyWithoutCoachInput_1.GlobalWorkoutUpdateManyWithoutCoachInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlobalWorkoutUpdateManyWithoutCoachInput_1.GlobalWorkoutUpdateManyWithoutCoachInput)
], CoachUpdateWithoutUserInput.prototype, "GlobalWorkout", void 0);
CoachUpdateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CoachUpdateWithoutUserInput", {
        isAbstract: true
    })
], CoachUpdateWithoutUserInput);
exports.CoachUpdateWithoutUserInput = CoachUpdateWithoutUserInput;
