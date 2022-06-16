"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByWorkoutToDoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkoutToDoOrderByWithAggregationInput_1 = require("../../../inputs/WorkoutToDoOrderByWithAggregationInput");
const WorkoutToDoScalarWhereWithAggregatesInput_1 = require("../../../inputs/WorkoutToDoScalarWhereWithAggregatesInput");
const WorkoutToDoWhereInput_1 = require("../../../inputs/WorkoutToDoWhereInput");
const WorkoutToDoScalarFieldEnum_1 = require("../../../../enums/WorkoutToDoScalarFieldEnum");
let GroupByWorkoutToDoArgs = class GroupByWorkoutToDoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoWhereInput_1.WorkoutToDoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkoutToDoWhereInput_1.WorkoutToDoWhereInput)
], GroupByWorkoutToDoArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkoutToDoOrderByWithAggregationInput_1.WorkoutToDoOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByWorkoutToDoArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkoutToDoScalarFieldEnum_1.WorkoutToDoScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByWorkoutToDoArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoScalarWhereWithAggregatesInput_1.WorkoutToDoScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkoutToDoScalarWhereWithAggregatesInput_1.WorkoutToDoScalarWhereWithAggregatesInput)
], GroupByWorkoutToDoArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByWorkoutToDoArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByWorkoutToDoArgs.prototype, "skip", void 0);
GroupByWorkoutToDoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByWorkoutToDoArgs);
exports.GroupByWorkoutToDoArgs = GroupByWorkoutToDoArgs;
