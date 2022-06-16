"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_StatusFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_Status_1 = require("../../enums/Enum_Status");
let EnumEnum_StatusFieldUpdateOperationsInput = class EnumEnum_StatusFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Status_1.Enum_Status, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_StatusFieldUpdateOperationsInput.prototype, "set", void 0);
EnumEnum_StatusFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_StatusFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumEnum_StatusFieldUpdateOperationsInput);
exports.EnumEnum_StatusFieldUpdateOperationsInput = EnumEnum_StatusFieldUpdateOperationsInput;
