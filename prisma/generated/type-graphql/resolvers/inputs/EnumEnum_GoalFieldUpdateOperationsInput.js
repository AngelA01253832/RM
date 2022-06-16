"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_GoalFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_Goal_1 = require("../../enums/Enum_Goal");
let EnumEnum_GoalFieldUpdateOperationsInput = class EnumEnum_GoalFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Goal_1.Enum_Goal, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_GoalFieldUpdateOperationsInput.prototype, "set", void 0);
EnumEnum_GoalFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_GoalFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumEnum_GoalFieldUpdateOperationsInput);
exports.EnumEnum_GoalFieldUpdateOperationsInput = EnumEnum_GoalFieldUpdateOperationsInput;
