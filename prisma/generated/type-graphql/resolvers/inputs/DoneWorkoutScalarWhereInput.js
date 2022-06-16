"use strict";
var DoneWorkoutScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoneWorkoutScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const FloatFilter_1 = require("../inputs/FloatFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let DoneWorkoutScalarWhereInput = DoneWorkoutScalarWhereInput_1 = class DoneWorkoutScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DoneWorkoutScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DoneWorkoutScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DoneWorkoutScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DoneWorkoutScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DoneWorkoutScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DoneWorkoutScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], DoneWorkoutScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], DoneWorkoutScalarWhereInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], DoneWorkoutScalarWhereInput.prototype, "calories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], DoneWorkoutScalarWhereInput.prototype, "time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFilter_1.FloatFilter)
], DoneWorkoutScalarWhereInput.prototype, "distance", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], DoneWorkoutScalarWhereInput.prototype, "intensity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], DoneWorkoutScalarWhereInput.prototype, "athleteId", void 0);
DoneWorkoutScalarWhereInput = DoneWorkoutScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("DoneWorkoutScalarWhereInput", {
        isAbstract: true
    })
], DoneWorkoutScalarWhereInput);
exports.DoneWorkoutScalarWhereInput = DoneWorkoutScalarWhereInput;
