"use strict";
var CoachWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoachWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumEnum_GenderFilter_1 = require("../inputs/EnumEnum_GenderFilter");
const EnumEnum_StatusFilter_1 = require("../inputs/EnumEnum_StatusFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
const WorkoutToDoListRelationFilter_1 = require("../inputs/WorkoutToDoListRelationFilter");
let CoachWhereInput = CoachWhereInput_1 = class CoachWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CoachWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CoachWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CoachWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CoachWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CoachWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CoachWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CoachWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CoachWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CoachWhereInput.prototype, "lastname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CoachWhereInput.prototype, "schoolId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CoachWhereInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_GenderFilter_1.EnumEnum_GenderFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_GenderFilter_1.EnumEnum_GenderFilter)
], CoachWhereInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_StatusFilter_1.EnumEnum_StatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_StatusFilter_1.EnumEnum_StatusFilter)
], CoachWhereInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], CoachWhereInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CoachWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoListRelationFilter_1.WorkoutToDoListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkoutToDoListRelationFilter_1.WorkoutToDoListRelationFilter)
], CoachWhereInput.prototype, "WorkoutToDo", void 0);
CoachWhereInput = CoachWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("CoachWhereInput", {
        isAbstract: true
    })
], CoachWhereInput);
exports.CoachWhereInput = CoachWhereInput;
