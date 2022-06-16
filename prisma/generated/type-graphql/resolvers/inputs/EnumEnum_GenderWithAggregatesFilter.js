"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_GenderWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_GenderFilter_1 = require("../inputs/NestedEnumEnum_GenderFilter");
const NestedEnumEnum_GenderWithAggregatesFilter_1 = require("../inputs/NestedEnumEnum_GenderWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Enum_Gender_1 = require("../../enums/Enum_Gender");
let EnumEnum_GenderWithAggregatesFilter = class EnumEnum_GenderWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Gender_1.Enum_Gender, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_GenderWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Gender_1.Enum_Gender], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_GenderWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Gender_1.Enum_Gender], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_GenderWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_GenderWithAggregatesFilter_1.NestedEnumEnum_GenderWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_GenderWithAggregatesFilter_1.NestedEnumEnum_GenderWithAggregatesFilter)
], EnumEnum_GenderWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumEnum_GenderWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_GenderFilter_1.NestedEnumEnum_GenderFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_GenderFilter_1.NestedEnumEnum_GenderFilter)
], EnumEnum_GenderWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_GenderFilter_1.NestedEnumEnum_GenderFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_GenderFilter_1.NestedEnumEnum_GenderFilter)
], EnumEnum_GenderWithAggregatesFilter.prototype, "_max", void 0);
EnumEnum_GenderWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_GenderWithAggregatesFilter", {
        isAbstract: true
    })
], EnumEnum_GenderWithAggregatesFilter);
exports.EnumEnum_GenderWithAggregatesFilter = EnumEnum_GenderWithAggregatesFilter;
