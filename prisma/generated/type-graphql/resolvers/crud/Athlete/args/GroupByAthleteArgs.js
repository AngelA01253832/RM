"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByAthleteArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AthleteOrderByWithAggregationInput_1 = require("../../../inputs/AthleteOrderByWithAggregationInput");
const AthleteScalarWhereWithAggregatesInput_1 = require("../../../inputs/AthleteScalarWhereWithAggregatesInput");
const AthleteWhereInput_1 = require("../../../inputs/AthleteWhereInput");
const AthleteScalarFieldEnum_1 = require("../../../../enums/AthleteScalarFieldEnum");
let GroupByAthleteArgs = class GroupByAthleteArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteWhereInput_1.AthleteWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteWhereInput_1.AthleteWhereInput)
], GroupByAthleteArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AthleteOrderByWithAggregationInput_1.AthleteOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByAthleteArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AthleteScalarFieldEnum_1.AthleteScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByAthleteArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteScalarWhereWithAggregatesInput_1.AthleteScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteScalarWhereWithAggregatesInput_1.AthleteScalarWhereWithAggregatesInput)
], GroupByAthleteArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByAthleteArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByAthleteArgs.prototype, "skip", void 0);
GroupByAthleteArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByAthleteArgs);
exports.GroupByAthleteArgs = GroupByAthleteArgs;
