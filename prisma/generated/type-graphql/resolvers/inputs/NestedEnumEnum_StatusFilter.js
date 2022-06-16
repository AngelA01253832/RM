"use strict";
var NestedEnumEnum_StatusFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_StatusFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_Status_1 = require("../../enums/Enum_Status");
let NestedEnumEnum_StatusFilter = NestedEnumEnum_StatusFilter_1 = class NestedEnumEnum_StatusFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Status_1.Enum_Status, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumEnum_StatusFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Status_1.Enum_Status], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_StatusFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Status_1.Enum_Status], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_StatusFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_StatusFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_StatusFilter)
], NestedEnumEnum_StatusFilter.prototype, "not", void 0);
NestedEnumEnum_StatusFilter = NestedEnumEnum_StatusFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumEnum_StatusFilter", {
        isAbstract: true
    })
], NestedEnumEnum_StatusFilter);
exports.NestedEnumEnum_StatusFilter = NestedEnumEnum_StatusFilter;
