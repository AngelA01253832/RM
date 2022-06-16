"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_StatusFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_StatusFilter_1 = require("../inputs/NestedEnumEnum_StatusFilter");
const Enum_Status_1 = require("../../enums/Enum_Status");
let EnumEnum_StatusFilter = class EnumEnum_StatusFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Status_1.Enum_Status, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_StatusFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Status_1.Enum_Status], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_StatusFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Status_1.Enum_Status], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_StatusFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_StatusFilter_1.NestedEnumEnum_StatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_StatusFilter_1.NestedEnumEnum_StatusFilter)
], EnumEnum_StatusFilter.prototype, "not", void 0);
EnumEnum_StatusFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_StatusFilter", {
        isAbstract: true
    })
], EnumEnum_StatusFilter);
exports.EnumEnum_StatusFilter = EnumEnum_StatusFilter;
