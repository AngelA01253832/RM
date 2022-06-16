"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateWeightArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WeightOrderByWithRelationInput_1 = require("../../../inputs/WeightOrderByWithRelationInput");
const WeightWhereInput_1 = require("../../../inputs/WeightWhereInput");
const WeightWhereUniqueInput_1 = require("../../../inputs/WeightWhereUniqueInput");
let AggregateWeightArgs = class AggregateWeightArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightWhereInput_1.WeightWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WeightWhereInput_1.WeightWhereInput)
], AggregateWeightArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WeightOrderByWithRelationInput_1.WeightOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateWeightArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightWhereUniqueInput_1.WeightWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WeightWhereUniqueInput_1.WeightWhereUniqueInput)
], AggregateWeightArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateWeightArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateWeightArgs.prototype, "skip", void 0);
AggregateWeightArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateWeightArgs);
exports.AggregateWeightArgs = AggregateWeightArgs;
