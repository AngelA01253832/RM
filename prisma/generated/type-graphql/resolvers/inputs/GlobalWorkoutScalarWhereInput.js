"use strict";
var GlobalWorkoutScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalWorkoutScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumEnum_GoalFilter_1 = require("../inputs/EnumEnum_GoalFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let GlobalWorkoutScalarWhereInput = GlobalWorkoutScalarWhereInput_1 = class GlobalWorkoutScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GlobalWorkoutScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GlobalWorkoutScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GlobalWorkoutScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GlobalWorkoutScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GlobalWorkoutScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GlobalWorkoutScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], GlobalWorkoutScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], GlobalWorkoutScalarWhereInput.prototype, "indications", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], GlobalWorkoutScalarWhereInput.prototype, "goal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_GoalFilter_1.EnumEnum_GoalFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_GoalFilter_1.EnumEnum_GoalFilter)
], GlobalWorkoutScalarWhereInput.prototype, "goalvalue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], GlobalWorkoutScalarWhereInput.prototype, "coachId", void 0);
GlobalWorkoutScalarWhereInput = GlobalWorkoutScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("GlobalWorkoutScalarWhereInput", {
        isAbstract: true
    })
], GlobalWorkoutScalarWhereInput);
exports.GlobalWorkoutScalarWhereInput = GlobalWorkoutScalarWhereInput;
