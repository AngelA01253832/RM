"use strict";
var WeightWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AthleteRelationFilter_1 = require("../inputs/AthleteRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const FloatFilter_1 = require("../inputs/FloatFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let WeightWhereInput = WeightWhereInput_1 = class WeightWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WeightWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WeightWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WeightWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WeightWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WeightWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WeightWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], WeightWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFilter_1.FloatFilter)
], WeightWhereInput.prototype, "weight", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteRelationFilter_1.AthleteRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteRelationFilter_1.AthleteRelationFilter)
], WeightWhereInput.prototype, "athlete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], WeightWhereInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], WeightWhereInput.prototype, "athleteId", void 0);
WeightWhereInput = WeightWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("WeightWhereInput", {
        isAbstract: true
    })
], WeightWhereInput);
exports.WeightWhereInput = WeightWhereInput;
