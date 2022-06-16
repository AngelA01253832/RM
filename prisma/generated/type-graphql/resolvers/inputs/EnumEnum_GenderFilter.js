"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_GenderFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_GenderFilter_1 = require("../inputs/NestedEnumEnum_GenderFilter");
const Enum_Gender_1 = require("../../enums/Enum_Gender");
let EnumEnum_GenderFilter = class EnumEnum_GenderFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Gender_1.Enum_Gender, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_GenderFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Gender_1.Enum_Gender], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_GenderFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Gender_1.Enum_Gender], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_GenderFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_GenderFilter_1.NestedEnumEnum_GenderFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_GenderFilter_1.NestedEnumEnum_GenderFilter)
], EnumEnum_GenderFilter.prototype, "not", void 0);
EnumEnum_GenderFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_GenderFilter", {
        isAbstract: true
    })
], EnumEnum_GenderFilter);
exports.EnumEnum_GenderFilter = EnumEnum_GenderFilter;
