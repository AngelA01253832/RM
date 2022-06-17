"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByGlobalWorkoutArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GlobalWorkoutOrderByWithAggregationInput_1 = require("../../../inputs/GlobalWorkoutOrderByWithAggregationInput");
const GlobalWorkoutScalarWhereWithAggregatesInput_1 = require("../../../inputs/GlobalWorkoutScalarWhereWithAggregatesInput");
const GlobalWorkoutWhereInput_1 = require("../../../inputs/GlobalWorkoutWhereInput");
const GlobalWorkoutScalarFieldEnum_1 = require("../../../../enums/GlobalWorkoutScalarFieldEnum");
let GroupByGlobalWorkoutArgs = class GroupByGlobalWorkoutArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlobalWorkoutWhereInput_1.GlobalWorkoutWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlobalWorkoutWhereInput_1.GlobalWorkoutWhereInput)
], GroupByGlobalWorkoutArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GlobalWorkoutOrderByWithAggregationInput_1.GlobalWorkoutOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByGlobalWorkoutArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GlobalWorkoutScalarFieldEnum_1.GlobalWorkoutScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByGlobalWorkoutArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlobalWorkoutScalarWhereWithAggregatesInput_1.GlobalWorkoutScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlobalWorkoutScalarWhereWithAggregatesInput_1.GlobalWorkoutScalarWhereWithAggregatesInput)
], GroupByGlobalWorkoutArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByGlobalWorkoutArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByGlobalWorkoutArgs.prototype, "skip", void 0);
GroupByGlobalWorkoutArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByGlobalWorkoutArgs);
exports.GroupByGlobalWorkoutArgs = GroupByGlobalWorkoutArgs;
