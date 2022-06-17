"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutToDoUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumEnum_GoalFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_GoalFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let WorkoutToDoUpdateManyMutationInput = class WorkoutToDoUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], WorkoutToDoUpdateManyMutationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], WorkoutToDoUpdateManyMutationInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], WorkoutToDoUpdateManyMutationInput.prototype, "indications", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_GoalFieldUpdateOperationsInput_1.EnumEnum_GoalFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_GoalFieldUpdateOperationsInput_1.EnumEnum_GoalFieldUpdateOperationsInput)
], WorkoutToDoUpdateManyMutationInput.prototype, "goal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], WorkoutToDoUpdateManyMutationInput.prototype, "goalvalue", void 0);
WorkoutToDoUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkoutToDoUpdateManyMutationInput", {
        isAbstract: true
    })
], WorkoutToDoUpdateManyMutationInput);
exports.WorkoutToDoUpdateManyMutationInput = WorkoutToDoUpdateManyMutationInput;
