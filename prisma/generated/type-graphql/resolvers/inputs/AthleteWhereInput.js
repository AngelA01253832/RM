"use strict";
var AthleteWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AthleteWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DoneWorkoutListRelationFilter_1 = require("../inputs/DoneWorkoutListRelationFilter");
const EnumEnum_GenderFilter_1 = require("../inputs/EnumEnum_GenderFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
const WeightListRelationFilter_1 = require("../inputs/WeightListRelationFilter");
const WorkoutToDoListRelationFilter_1 = require("../inputs/WorkoutToDoListRelationFilter");
let AthleteWhereInput = AthleteWhereInput_1 = class AthleteWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AthleteWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AthleteWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AthleteWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AthleteWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AthleteWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AthleteWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AthleteWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AthleteWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AthleteWhereInput.prototype, "lastname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AthleteWhereInput.prototype, "schoolId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_GenderFilter_1.EnumEnum_GenderFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_GenderFilter_1.EnumEnum_GenderFilter)
], AthleteWhereInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], AthleteWhereInput.prototype, "height", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], AthleteWhereInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightListRelationFilter_1.WeightListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WeightListRelationFilter_1.WeightListRelationFilter)
], AthleteWhereInput.prototype, "Weights", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutListRelationFilter_1.DoneWorkoutListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DoneWorkoutListRelationFilter_1.DoneWorkoutListRelationFilter)
], AthleteWhereInput.prototype, "DoneWorkouts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoListRelationFilter_1.WorkoutToDoListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkoutToDoListRelationFilter_1.WorkoutToDoListRelationFilter)
], AthleteWhereInput.prototype, "WorkoutstToDo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AthleteWhereInput.prototype, "userId", void 0);
AthleteWhereInput = AthleteWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("AthleteWhereInput", {
        isAbstract: true
    })
], AthleteWhereInput);
exports.AthleteWhereInput = AthleteWhereInput;
