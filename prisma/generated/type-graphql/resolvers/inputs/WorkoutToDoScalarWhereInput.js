"use strict";
var WorkoutToDoScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutToDoScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumEnum_GoalFilter_1 = require("../inputs/EnumEnum_GoalFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let WorkoutToDoScalarWhereInput = WorkoutToDoScalarWhereInput_1 = class WorkoutToDoScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkoutToDoScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkoutToDoScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkoutToDoScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkoutToDoScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkoutToDoScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkoutToDoScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], WorkoutToDoScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], WorkoutToDoScalarWhereInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_GoalFilter_1.EnumEnum_GoalFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_GoalFilter_1.EnumEnum_GoalFilter)
], WorkoutToDoScalarWhereInput.prototype, "goal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], WorkoutToDoScalarWhereInput.prototype, "coachId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], WorkoutToDoScalarWhereInput.prototype, "athleteId", void 0);
WorkoutToDoScalarWhereInput = WorkoutToDoScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkoutToDoScalarWhereInput", {
        isAbstract: true
    })
], WorkoutToDoScalarWhereInput);
exports.WorkoutToDoScalarWhereInput = WorkoutToDoScalarWhereInput;
