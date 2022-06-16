"use strict";
var NestedEnumEnum_GoalFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_GoalFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_Goal_1 = require("../../enums/Enum_Goal");
let NestedEnumEnum_GoalFilter = NestedEnumEnum_GoalFilter_1 = class NestedEnumEnum_GoalFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Goal_1.Enum_Goal, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumEnum_GoalFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Goal_1.Enum_Goal], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_GoalFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Goal_1.Enum_Goal], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_GoalFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_GoalFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_GoalFilter)
], NestedEnumEnum_GoalFilter.prototype, "not", void 0);
NestedEnumEnum_GoalFilter = NestedEnumEnum_GoalFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumEnum_GoalFilter", {
        isAbstract: true
    })
], NestedEnumEnum_GoalFilter);
exports.NestedEnumEnum_GoalFilter = NestedEnumEnum_GoalFilter;
