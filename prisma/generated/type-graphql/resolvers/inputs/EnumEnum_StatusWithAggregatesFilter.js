"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_StatusWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_StatusFilter_1 = require("../inputs/NestedEnumEnum_StatusFilter");
const NestedEnumEnum_StatusWithAggregatesFilter_1 = require("../inputs/NestedEnumEnum_StatusWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Enum_Status_1 = require("../../enums/Enum_Status");
let EnumEnum_StatusWithAggregatesFilter = class EnumEnum_StatusWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Status_1.Enum_Status, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_StatusWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Status_1.Enum_Status], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_StatusWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Status_1.Enum_Status], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_StatusWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_StatusWithAggregatesFilter_1.NestedEnumEnum_StatusWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_StatusWithAggregatesFilter_1.NestedEnumEnum_StatusWithAggregatesFilter)
], EnumEnum_StatusWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumEnum_StatusWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_StatusFilter_1.NestedEnumEnum_StatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_StatusFilter_1.NestedEnumEnum_StatusFilter)
], EnumEnum_StatusWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_StatusFilter_1.NestedEnumEnum_StatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_StatusFilter_1.NestedEnumEnum_StatusFilter)
], EnumEnum_StatusWithAggregatesFilter.prototype, "_max", void 0);
EnumEnum_StatusWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_StatusWithAggregatesFilter", {
        isAbstract: true
    })
], EnumEnum_StatusWithAggregatesFilter);
exports.EnumEnum_StatusWithAggregatesFilter = EnumEnum_StatusWithAggregatesFilter;
