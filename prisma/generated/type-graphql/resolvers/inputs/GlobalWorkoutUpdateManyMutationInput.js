"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalWorkoutUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumEnum_GoalFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_GoalFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let GlobalWorkoutUpdateManyMutationInput = class GlobalWorkoutUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], GlobalWorkoutUpdateManyMutationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], GlobalWorkoutUpdateManyMutationInput.prototype, "indications", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], GlobalWorkoutUpdateManyMutationInput.prototype, "goal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_GoalFieldUpdateOperationsInput_1.EnumEnum_GoalFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_GoalFieldUpdateOperationsInput_1.EnumEnum_GoalFieldUpdateOperationsInput)
], GlobalWorkoutUpdateManyMutationInput.prototype, "goalvalue", void 0);
GlobalWorkoutUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("GlobalWorkoutUpdateManyMutationInput", {
        isAbstract: true
    })
], GlobalWorkoutUpdateManyMutationInput);
exports.GlobalWorkoutUpdateManyMutationInput = GlobalWorkoutUpdateManyMutationInput;
