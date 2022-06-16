"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCoachArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CoachOrderByWithAggregationInput_1 = require("../../../inputs/CoachOrderByWithAggregationInput");
const CoachScalarWhereWithAggregatesInput_1 = require("../../../inputs/CoachScalarWhereWithAggregatesInput");
const CoachWhereInput_1 = require("../../../inputs/CoachWhereInput");
const CoachScalarFieldEnum_1 = require("../../../../enums/CoachScalarFieldEnum");
let GroupByCoachArgs = class GroupByCoachArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachWhereInput_1.CoachWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachWhereInput_1.CoachWhereInput)
], GroupByCoachArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CoachOrderByWithAggregationInput_1.CoachOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCoachArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CoachScalarFieldEnum_1.CoachScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCoachArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachScalarWhereWithAggregatesInput_1.CoachScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachScalarWhereWithAggregatesInput_1.CoachScalarWhereWithAggregatesInput)
], GroupByCoachArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCoachArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCoachArgs.prototype, "skip", void 0);
GroupByCoachArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByCoachArgs);
exports.GroupByCoachArgs = GroupByCoachArgs;
