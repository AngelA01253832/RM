"use strict";
var GlobalWorkoutWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalWorkoutWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CoachRelationFilter_1 = require("../inputs/CoachRelationFilter");
const EnumEnum_GoalFilter_1 = require("../inputs/EnumEnum_GoalFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let GlobalWorkoutWhereInput = GlobalWorkoutWhereInput_1 = class GlobalWorkoutWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GlobalWorkoutWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GlobalWorkoutWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GlobalWorkoutWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GlobalWorkoutWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GlobalWorkoutWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GlobalWorkoutWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], GlobalWorkoutWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachRelationFilter_1.CoachRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachRelationFilter_1.CoachRelationFilter)
], GlobalWorkoutWhereInput.prototype, "coach", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], GlobalWorkoutWhereInput.prototype, "indications", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], GlobalWorkoutWhereInput.prototype, "goal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_GoalFilter_1.EnumEnum_GoalFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_GoalFilter_1.EnumEnum_GoalFilter)
], GlobalWorkoutWhereInput.prototype, "goalvalue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], GlobalWorkoutWhereInput.prototype, "coachId", void 0);
GlobalWorkoutWhereInput = GlobalWorkoutWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("GlobalWorkoutWhereInput", {
        isAbstract: true
    })
], GlobalWorkoutWhereInput);
exports.GlobalWorkoutWhereInput = GlobalWorkoutWhereInput;
