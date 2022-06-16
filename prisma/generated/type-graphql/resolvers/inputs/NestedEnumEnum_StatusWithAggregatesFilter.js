"use strict";
var NestedEnumEnum_StatusWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_StatusWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_StatusFilter_1 = require("../inputs/NestedEnumEnum_StatusFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Enum_Status_1 = require("../../enums/Enum_Status");
let NestedEnumEnum_StatusWithAggregatesFilter = NestedEnumEnum_StatusWithAggregatesFilter_1 = class NestedEnumEnum_StatusWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Status_1.Enum_Status, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumEnum_StatusWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Status_1.Enum_Status], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_StatusWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Status_1.Enum_Status], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_StatusWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_StatusWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_StatusWithAggregatesFilter)
], NestedEnumEnum_StatusWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumEnum_StatusWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_StatusFilter_1.NestedEnumEnum_StatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_StatusFilter_1.NestedEnumEnum_StatusFilter)
], NestedEnumEnum_StatusWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_StatusFilter_1.NestedEnumEnum_StatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_StatusFilter_1.NestedEnumEnum_StatusFilter)
], NestedEnumEnum_StatusWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumEnum_StatusWithAggregatesFilter = NestedEnumEnum_StatusWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumEnum_StatusWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumEnum_StatusWithAggregatesFilter);
exports.NestedEnumEnum_StatusWithAggregatesFilter = NestedEnumEnum_StatusWithAggregatesFilter;
