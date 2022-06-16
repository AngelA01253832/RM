"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstWeightArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WeightOrderByWithRelationInput_1 = require("../../../inputs/WeightOrderByWithRelationInput");
const WeightWhereInput_1 = require("../../../inputs/WeightWhereInput");
const WeightWhereUniqueInput_1 = require("../../../inputs/WeightWhereUniqueInput");
const WeightScalarFieldEnum_1 = require("../../../../enums/WeightScalarFieldEnum");
let FindFirstWeightArgs = class FindFirstWeightArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightWhereInput_1.WeightWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WeightWhereInput_1.WeightWhereInput)
], FindFirstWeightArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WeightOrderByWithRelationInput_1.WeightOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstWeightArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightWhereUniqueInput_1.WeightWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WeightWhereUniqueInput_1.WeightWhereUniqueInput)
], FindFirstWeightArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstWeightArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstWeightArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WeightScalarFieldEnum_1.WeightScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstWeightArgs.prototype, "distinct", void 0);
FindFirstWeightArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstWeightArgs);
exports.FindFirstWeightArgs = FindFirstWeightArgs;
