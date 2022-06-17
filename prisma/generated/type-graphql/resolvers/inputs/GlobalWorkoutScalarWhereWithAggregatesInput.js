"use strict";
var GlobalWorkoutScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalWorkoutScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumEnum_GoalWithAggregatesFilter_1 = require("../inputs/EnumEnum_GoalWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let GlobalWorkoutScalarWhereWithAggregatesInput = GlobalWorkoutScalarWhereWithAggregatesInput_1 = class GlobalWorkoutScalarWhereWithAggregatesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GlobalWorkoutScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GlobalWorkoutScalarWhereWithAggregatesInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GlobalWorkoutScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GlobalWorkoutScalarWhereWithAggregatesInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GlobalWorkoutScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GlobalWorkoutScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], GlobalWorkoutScalarWhereWithAggregatesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], GlobalWorkoutScalarWhereWithAggregatesInput.prototype, "indications", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], GlobalWorkoutScalarWhereWithAggregatesInput.prototype, "goal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_GoalWithAggregatesFilter_1.EnumEnum_GoalWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_GoalWithAggregatesFilter_1.EnumEnum_GoalWithAggregatesFilter)
], GlobalWorkoutScalarWhereWithAggregatesInput.prototype, "goalvalue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], GlobalWorkoutScalarWhereWithAggregatesInput.prototype, "coachId", void 0);
GlobalWorkoutScalarWhereWithAggregatesInput = GlobalWorkoutScalarWhereWithAggregatesInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("GlobalWorkoutScalarWhereWithAggregatesInput", {
        isAbstract: true
    })
], GlobalWorkoutScalarWhereWithAggregatesInput);
exports.GlobalWorkoutScalarWhereWithAggregatesInput = GlobalWorkoutScalarWhereWithAggregatesInput;
