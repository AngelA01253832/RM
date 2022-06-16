"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_GenderFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_Gender_1 = require("../../enums/Enum_Gender");
let EnumEnum_GenderFieldUpdateOperationsInput = class EnumEnum_GenderFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Gender_1.Enum_Gender, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_GenderFieldUpdateOperationsInput.prototype, "set", void 0);
EnumEnum_GenderFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_GenderFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumEnum_GenderFieldUpdateOperationsInput);
exports.EnumEnum_GenderFieldUpdateOperationsInput = EnumEnum_GenderFieldUpdateOperationsInput;
