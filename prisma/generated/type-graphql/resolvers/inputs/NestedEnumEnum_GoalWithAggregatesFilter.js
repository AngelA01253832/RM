"use strict";
var NestedEnumEnum_GoalWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_GoalWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_GoalFilter_1 = require("../inputs/NestedEnumEnum_GoalFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Enum_Goal_1 = require("../../enums/Enum_Goal");
let NestedEnumEnum_GoalWithAggregatesFilter = NestedEnumEnum_GoalWithAggregatesFilter_1 = class NestedEnumEnum_GoalWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Goal_1.Enum_Goal, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumEnum_GoalWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Goal_1.Enum_Goal], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_GoalWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Goal_1.Enum_Goal], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_GoalWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_GoalWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_GoalWithAggregatesFilter)
], NestedEnumEnum_GoalWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumEnum_GoalWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_GoalFilter_1.NestedEnumEnum_GoalFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_GoalFilter_1.NestedEnumEnum_GoalFilter)
], NestedEnumEnum_GoalWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_GoalFilter_1.NestedEnumEnum_GoalFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_GoalFilter_1.NestedEnumEnum_GoalFilter)
], NestedEnumEnum_GoalWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumEnum_GoalWithAggregatesFilter = NestedEnumEnum_GoalWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumEnum_GoalWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumEnum_GoalWithAggregatesFilter);
exports.NestedEnumEnum_GoalWithAggregatesFilter = NestedEnumEnum_GoalWithAggregatesFilter;
