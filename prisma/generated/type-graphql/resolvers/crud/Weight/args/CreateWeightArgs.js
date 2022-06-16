"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWeightArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WeightCreateInput_1 = require("../../../inputs/WeightCreateInput");
let CreateWeightArgs = class CreateWeightArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightCreateInput_1.WeightCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WeightCreateInput_1.WeightCreateInput)
], CreateWeightArgs.prototype, "data", void 0);
CreateWeightArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateWeightArgs);
exports.CreateWeightArgs = CreateWeightArgs;
