"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByAdminArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AdminOrderByWithAggregationInput_1 = require("../../../inputs/AdminOrderByWithAggregationInput");
const AdminScalarWhereWithAggregatesInput_1 = require("../../../inputs/AdminScalarWhereWithAggregatesInput");
const AdminWhereInput_1 = require("../../../inputs/AdminWhereInput");
const AdminScalarFieldEnum_1 = require("../../../../enums/AdminScalarFieldEnum");
let GroupByAdminArgs = class GroupByAdminArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminWhereInput_1.AdminWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdminWhereInput_1.AdminWhereInput)
], GroupByAdminArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AdminOrderByWithAggregationInput_1.AdminOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByAdminArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AdminScalarFieldEnum_1.AdminScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByAdminArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminScalarWhereWithAggregatesInput_1.AdminScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdminScalarWhereWithAggregatesInput_1.AdminScalarWhereWithAggregatesInput)
], GroupByAdminArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByAdminArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByAdminArgs.prototype, "skip", void 0);
GroupByAdminArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByAdminArgs);
exports.GroupByAdminArgs = GroupByAdminArgs;
