"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyWeightArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WeightUpdateManyMutationInput_1 = require("../../../inputs/WeightUpdateManyMutationInput");
const WeightWhereInput_1 = require("../../../inputs/WeightWhereInput");
let UpdateManyWeightArgs = class UpdateManyWeightArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightUpdateManyMutationInput_1.WeightUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WeightUpdateManyMutationInput_1.WeightUpdateManyMutationInput)
], UpdateManyWeightArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightWhereInput_1.WeightWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WeightWhereInput_1.WeightWhereInput)
], UpdateManyWeightArgs.prototype, "where", void 0);
UpdateManyWeightArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyWeightArgs);
exports.UpdateManyWeightArgs = UpdateManyWeightArgs;
