"use strict";
var DoneWorkoutWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoneWorkoutWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AthleteRelationFilter_1 = require("../inputs/AthleteRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const FloatFilter_1 = require("../inputs/FloatFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let DoneWorkoutWhereInput = DoneWorkoutWhereInput_1 = class DoneWorkoutWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DoneWorkoutWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DoneWorkoutWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DoneWorkoutWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DoneWorkoutWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DoneWorkoutWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DoneWorkoutWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], DoneWorkoutWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteRelationFilter_1.AthleteRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteRelationFilter_1.AthleteRelationFilter)
], DoneWorkoutWhereInput.prototype, "athlete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], DoneWorkoutWhereInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], DoneWorkoutWhereInput.prototype, "calories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], DoneWorkoutWhereInput.prototype, "time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFilter_1.FloatFilter)
], DoneWorkoutWhereInput.prototype, "distance", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], DoneWorkoutWhereInput.prototype, "intensity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], DoneWorkoutWhereInput.prototype, "athleteId", void 0);
DoneWorkoutWhereInput = DoneWorkoutWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("DoneWorkoutWhereInput", {
        isAbstract: true
    })
], DoneWorkoutWhereInput);
exports.DoneWorkoutWhereInput = DoneWorkoutWhereInput;
