"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_GoalFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_GoalFilter_1 = require("../inputs/NestedEnumEnum_GoalFilter");
const Enum_Goal_1 = require("../../enums/Enum_Goal");
let EnumEnum_GoalFilter = class EnumEnum_GoalFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Goal_1.Enum_Goal, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_GoalFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Goal_1.Enum_Goal], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_GoalFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Goal_1.Enum_Goal], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_GoalFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_GoalFilter_1.NestedEnumEnum_GoalFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_GoalFilter_1.NestedEnumEnum_GoalFilter)
], EnumEnum_GoalFilter.prototype, "not", void 0);
EnumEnum_GoalFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_GoalFilter", {
        isAbstract: true
    })
], EnumEnum_GoalFilter);
exports.EnumEnum_GoalFilter = EnumEnum_GoalFilter;
