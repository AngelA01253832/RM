"use strict";
var WorkoutToDoWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutToDoWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AthleteRelationFilter_1 = require("../inputs/AthleteRelationFilter");
const CoachRelationFilter_1 = require("../inputs/CoachRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumEnum_GoalFilter_1 = require("../inputs/EnumEnum_GoalFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let WorkoutToDoWhereInput = WorkoutToDoWhereInput_1 = class WorkoutToDoWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkoutToDoWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkoutToDoWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkoutToDoWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkoutToDoWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkoutToDoWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkoutToDoWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], WorkoutToDoWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachRelationFilter_1.CoachRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachRelationFilter_1.CoachRelationFilter)
], WorkoutToDoWhereInput.prototype, "coach", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteRelationFilter_1.AthleteRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteRelationFilter_1.AthleteRelationFilter)
], WorkoutToDoWhereInput.prototype, "athlete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], WorkoutToDoWhereInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], WorkoutToDoWhereInput.prototype, "indications", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_GoalFilter_1.EnumEnum_GoalFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_GoalFilter_1.EnumEnum_GoalFilter)
], WorkoutToDoWhereInput.prototype, "goal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], WorkoutToDoWhereInput.prototype, "goalvalue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], WorkoutToDoWhereInput.prototype, "coachId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], WorkoutToDoWhereInput.prototype, "athleteId", void 0);
WorkoutToDoWhereInput = WorkoutToDoWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkoutToDoWhereInput", {
        isAbstract: true
    })
], WorkoutToDoWhereInput);
exports.WorkoutToDoWhereInput = WorkoutToDoWhereInput;
