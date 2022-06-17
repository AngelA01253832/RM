"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoachUpdateWithoutWorkoutToDoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumEnum_GenderFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_GenderFieldUpdateOperationsInput");
const EnumEnum_StatusFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_StatusFieldUpdateOperationsInput");
const GlobalWorkoutUpdateManyWithoutCoachInput_1 = require("../inputs/GlobalWorkoutUpdateManyWithoutCoachInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutCoachInput_1 = require("../inputs/UserUpdateOneRequiredWithoutCoachInput");
let CoachUpdateWithoutWorkoutToDoInput = class CoachUpdateWithoutWorkoutToDoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CoachUpdateWithoutWorkoutToDoInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CoachUpdateWithoutWorkoutToDoInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CoachUpdateWithoutWorkoutToDoInput.prototype, "lastname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CoachUpdateWithoutWorkoutToDoInput.prototype, "schoolId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CoachUpdateWithoutWorkoutToDoInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CoachUpdateWithoutWorkoutToDoInput.prototype, "scheduler", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CoachUpdateWithoutWorkoutToDoInput.prototype, "KnowTrainer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_GenderFieldUpdateOperationsInput_1.EnumEnum_GenderFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_GenderFieldUpdateOperationsInput_1.EnumEnum_GenderFieldUpdateOperationsInput)
], CoachUpdateWithoutWorkoutToDoInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_StatusFieldUpdateOperationsInput_1.EnumEnum_StatusFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_StatusFieldUpdateOperationsInput_1.EnumEnum_StatusFieldUpdateOperationsInput)
], CoachUpdateWithoutWorkoutToDoInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCoachInput_1.UserUpdateOneRequiredWithoutCoachInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutCoachInput_1.UserUpdateOneRequiredWithoutCoachInput)
], CoachUpdateWithoutWorkoutToDoInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlobalWorkoutUpdateManyWithoutCoachInput_1.GlobalWorkoutUpdateManyWithoutCoachInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlobalWorkoutUpdateManyWithoutCoachInput_1.GlobalWorkoutUpdateManyWithoutCoachInput)
], CoachUpdateWithoutWorkoutToDoInput.prototype, "GlobalWorkout", void 0);
CoachUpdateWithoutWorkoutToDoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CoachUpdateWithoutWorkoutToDoInput", {
        isAbstract: true
    })
], CoachUpdateWithoutWorkoutToDoInput);
exports.CoachUpdateWithoutWorkoutToDoInput = CoachUpdateWithoutWorkoutToDoInput;
