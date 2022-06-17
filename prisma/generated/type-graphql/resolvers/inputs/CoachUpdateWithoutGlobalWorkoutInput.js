"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoachUpdateWithoutGlobalWorkoutInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumEnum_GenderFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_GenderFieldUpdateOperationsInput");
const EnumEnum_StatusFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_StatusFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutCoachInput_1 = require("../inputs/UserUpdateOneRequiredWithoutCoachInput");
const WorkoutToDoUpdateManyWithoutCoachInput_1 = require("../inputs/WorkoutToDoUpdateManyWithoutCoachInput");
let CoachUpdateWithoutGlobalWorkoutInput = class CoachUpdateWithoutGlobalWorkoutInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CoachUpdateWithoutGlobalWorkoutInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CoachUpdateWithoutGlobalWorkoutInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CoachUpdateWithoutGlobalWorkoutInput.prototype, "lastname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CoachUpdateWithoutGlobalWorkoutInput.prototype, "schoolId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CoachUpdateWithoutGlobalWorkoutInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CoachUpdateWithoutGlobalWorkoutInput.prototype, "scheduler", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CoachUpdateWithoutGlobalWorkoutInput.prototype, "KnowTrainer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_GenderFieldUpdateOperationsInput_1.EnumEnum_GenderFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_GenderFieldUpdateOperationsInput_1.EnumEnum_GenderFieldUpdateOperationsInput)
], CoachUpdateWithoutGlobalWorkoutInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_StatusFieldUpdateOperationsInput_1.EnumEnum_StatusFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_StatusFieldUpdateOperationsInput_1.EnumEnum_StatusFieldUpdateOperationsInput)
], CoachUpdateWithoutGlobalWorkoutInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCoachInput_1.UserUpdateOneRequiredWithoutCoachInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutCoachInput_1.UserUpdateOneRequiredWithoutCoachInput)
], CoachUpdateWithoutGlobalWorkoutInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoUpdateManyWithoutCoachInput_1.WorkoutToDoUpdateManyWithoutCoachInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkoutToDoUpdateManyWithoutCoachInput_1.WorkoutToDoUpdateManyWithoutCoachInput)
], CoachUpdateWithoutGlobalWorkoutInput.prototype, "WorkoutToDo", void 0);
CoachUpdateWithoutGlobalWorkoutInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CoachUpdateWithoutGlobalWorkoutInput", {
        isAbstract: true
    })
], CoachUpdateWithoutGlobalWorkoutInput);
exports.CoachUpdateWithoutGlobalWorkoutInput = CoachUpdateWithoutGlobalWorkoutInput;
