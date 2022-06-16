"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWeightArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WeightUpdateInput_1 = require("../../../inputs/WeightUpdateInput");
const WeightWhereUniqueInput_1 = require("../../../inputs/WeightWhereUniqueInput");
let UpdateWeightArgs = class UpdateWeightArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightUpdateInput_1.WeightUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WeightUpdateInput_1.WeightUpdateInput)
], UpdateWeightArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightWhereUniqueInput_1.WeightWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WeightWhereUniqueInput_1.WeightWhereUniqueInput)
], UpdateWeightArgs.prototype, "where", void 0);
UpdateWeightArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateWeightArgs);
exports.UpdateWeightArgs = UpdateWeightArgs;
