"use strict";
var NestedEnumEnum_GenderFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_GenderFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_Gender_1 = require("../../enums/Enum_Gender");
let NestedEnumEnum_GenderFilter = NestedEnumEnum_GenderFilter_1 = class NestedEnumEnum_GenderFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Gender_1.Enum_Gender, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumEnum_GenderFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Gender_1.Enum_Gender], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_GenderFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Gender_1.Enum_Gender], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_GenderFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_GenderFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_GenderFilter)
], NestedEnumEnum_GenderFilter.prototype, "not", void 0);
NestedEnumEnum_GenderFilter = NestedEnumEnum_GenderFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumEnum_GenderFilter", {
        isAbstract: true
    })
], NestedEnumEnum_GenderFilter);
exports.NestedEnumEnum_GenderFilter = NestedEnumEnum_GenderFilter;
