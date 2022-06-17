"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalWorkoutUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CoachUpdateOneRequiredWithoutGlobalWorkoutInput_1 = require("../inputs/CoachUpdateOneRequiredWithoutGlobalWorkoutInput");
const EnumEnum_GoalFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_GoalFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let GlobalWorkoutUpdateInput = class GlobalWorkoutUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], GlobalWorkoutUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachUpdateOneRequiredWithoutGlobalWorkoutInput_1.CoachUpdateOneRequiredWithoutGlobalWorkoutInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachUpdateOneRequiredWithoutGlobalWorkoutInput_1.CoachUpdateOneRequiredWithoutGlobalWorkoutInput)
], GlobalWorkoutUpdateInput.prototype, "coach", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], GlobalWorkoutUpdateInput.prototype, "indications", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], GlobalWorkoutUpdateInput.prototype, "goal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_GoalFieldUpdateOperationsInput_1.EnumEnum_GoalFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_GoalFieldUpdateOperationsInput_1.EnumEnum_GoalFieldUpdateOperationsInput)
], GlobalWorkoutUpdateInput.prototype, "goalvalue", void 0);
GlobalWorkoutUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("GlobalWorkoutUpdateInput", {
        isAbstract: true
    })
], GlobalWorkoutUpdateInput);
exports.GlobalWorkoutUpdateInput = GlobalWorkoutUpdateInput;
