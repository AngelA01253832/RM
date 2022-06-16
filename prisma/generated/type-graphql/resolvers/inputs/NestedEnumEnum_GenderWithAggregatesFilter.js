"use strict";
var NestedEnumEnum_GenderWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_GenderWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_GenderFilter_1 = require("../inputs/NestedEnumEnum_GenderFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Enum_Gender_1 = require("../../enums/Enum_Gender");
let NestedEnumEnum_GenderWithAggregatesFilter = NestedEnumEnum_GenderWithAggregatesFilter_1 = class NestedEnumEnum_GenderWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Gender_1.Enum_Gender, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumEnum_GenderWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Gender_1.Enum_Gender], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_GenderWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Gender_1.Enum_Gender], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_GenderWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_GenderWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_GenderWithAggregatesFilter)
], NestedEnumEnum_GenderWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumEnum_GenderWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_GenderFilter_1.NestedEnumEnum_GenderFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_GenderFilter_1.NestedEnumEnum_GenderFilter)
], NestedEnumEnum_GenderWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_GenderFilter_1.NestedEnumEnum_GenderFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_GenderFilter_1.NestedEnumEnum_GenderFilter)
], NestedEnumEnum_GenderWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumEnum_GenderWithAggregatesFilter = NestedEnumEnum_GenderWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumEnum_GenderWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumEnum_GenderWithAggregatesFilter);
exports.NestedEnumEnum_GenderWithAggregatesFilter = NestedEnumEnum_GenderWithAggregatesFilter;
