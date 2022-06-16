"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertWeightArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WeightCreateInput_1 = require("../../../inputs/WeightCreateInput");
const WeightUpdateInput_1 = require("../../../inputs/WeightUpdateInput");
const WeightWhereUniqueInput_1 = require("../../../inputs/WeightWhereUniqueInput");
let UpsertWeightArgs = class UpsertWeightArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightWhereUniqueInput_1.WeightWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WeightWhereUniqueInput_1.WeightWhereUniqueInput)
], UpsertWeightArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightCreateInput_1.WeightCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WeightCreateInput_1.WeightCreateInput)
], UpsertWeightArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightUpdateInput_1.WeightUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WeightUpdateInput_1.WeightUpdateInput)
], UpsertWeightArgs.prototype, "update", void 0);
UpsertWeightArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertWeightArgs);
exports.UpsertWeightArgs = UpsertWeightArgs;
