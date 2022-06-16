"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_GoalWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_GoalFilter_1 = require("../inputs/NestedEnumEnum_GoalFilter");
const NestedEnumEnum_GoalWithAggregatesFilter_1 = require("../inputs/NestedEnumEnum_GoalWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Enum_Goal_1 = require("../../enums/Enum_Goal");
let EnumEnum_GoalWithAggregatesFilter = class EnumEnum_GoalWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Goal_1.Enum_Goal, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_GoalWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Goal_1.Enum_Goal], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_GoalWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Goal_1.Enum_Goal], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_GoalWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_GoalWithAggregatesFilter_1.NestedEnumEnum_GoalWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_GoalWithAggregatesFilter_1.NestedEnumEnum_GoalWithAggregatesFilter)
], EnumEnum_GoalWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumEnum_GoalWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_GoalFilter_1.NestedEnumEnum_GoalFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_GoalFilter_1.NestedEnumEnum_GoalFilter)
], EnumEnum_GoalWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_GoalFilter_1.NestedEnumEnum_GoalFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_GoalFilter_1.NestedEnumEnum_GoalFilter)
], EnumEnum_GoalWithAggregatesFilter.prototype, "_max", void 0);
EnumEnum_GoalWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_GoalWithAggregatesFilter", {
        isAbstract: true
    })
], EnumEnum_GoalWithAggregatesFilter);
exports.EnumEnum_GoalWithAggregatesFilter = EnumEnum_GoalWithAggregatesFilter;
