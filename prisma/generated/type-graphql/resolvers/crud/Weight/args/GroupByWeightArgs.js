"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByWeightArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WeightOrderByWithAggregationInput_1 = require("../../../inputs/WeightOrderByWithAggregationInput");
const WeightScalarWhereWithAggregatesInput_1 = require("../../../inputs/WeightScalarWhereWithAggregatesInput");
const WeightWhereInput_1 = require("../../../inputs/WeightWhereInput");
const WeightScalarFieldEnum_1 = require("../../../../enums/WeightScalarFieldEnum");
let GroupByWeightArgs = class GroupByWeightArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightWhereInput_1.WeightWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WeightWhereInput_1.WeightWhereInput)
], GroupByWeightArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WeightOrderByWithAggregationInput_1.WeightOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByWeightArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WeightScalarFieldEnum_1.WeightScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByWeightArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightScalarWhereWithAggregatesInput_1.WeightScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WeightScalarWhereWithAggregatesInput_1.WeightScalarWhereWithAggregatesInput)
], GroupByWeightArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByWeightArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByWeightArgs.prototype, "skip", void 0);
GroupByWeightArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByWeightArgs);
exports.GroupByWeightArgs = GroupByWeightArgs;
