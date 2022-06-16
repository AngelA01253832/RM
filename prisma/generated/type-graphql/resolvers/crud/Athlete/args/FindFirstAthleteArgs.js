"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstAthleteArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AthleteOrderByWithRelationInput_1 = require("../../../inputs/AthleteOrderByWithRelationInput");
const AthleteWhereInput_1 = require("../../../inputs/AthleteWhereInput");
const AthleteWhereUniqueInput_1 = require("../../../inputs/AthleteWhereUniqueInput");
const AthleteScalarFieldEnum_1 = require("../../../../enums/AthleteScalarFieldEnum");
let FindFirstAthleteArgs = class FindFirstAthleteArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteWhereInput_1.AthleteWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteWhereInput_1.AthleteWhereInput)
], FindFirstAthleteArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AthleteOrderByWithRelationInput_1.AthleteOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstAthleteArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteWhereUniqueInput_1.AthleteWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteWhereUniqueInput_1.AthleteWhereUniqueInput)
], FindFirstAthleteArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstAthleteArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstAthleteArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AthleteScalarFieldEnum_1.AthleteScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstAthleteArgs.prototype, "distinct", void 0);
FindFirstAthleteArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstAthleteArgs);
exports.FindFirstAthleteArgs = FindFirstAthleteArgs;
