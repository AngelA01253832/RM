"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AthleteWeightsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WeightOrderByWithRelationInput_1 = require("../../../inputs/WeightOrderByWithRelationInput");
const WeightWhereInput_1 = require("../../../inputs/WeightWhereInput");
const WeightWhereUniqueInput_1 = require("../../../inputs/WeightWhereUniqueInput");
const WeightScalarFieldEnum_1 = require("../../../../enums/WeightScalarFieldEnum");
let AthleteWeightsArgs = class AthleteWeightsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightWhereInput_1.WeightWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WeightWhereInput_1.WeightWhereInput)
], AthleteWeightsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WeightOrderByWithRelationInput_1.WeightOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AthleteWeightsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightWhereUniqueInput_1.WeightWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WeightWhereUniqueInput_1.WeightWhereUniqueInput)
], AthleteWeightsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AthleteWeightsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AthleteWeightsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WeightScalarFieldEnum_1.WeightScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AthleteWeightsArgs.prototype, "distinct", void 0);
AthleteWeightsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AthleteWeightsArgs);
exports.AthleteWeightsArgs = AthleteWeightsArgs;
