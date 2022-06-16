"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueWeightArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WeightWhereUniqueInput_1 = require("../../../inputs/WeightWhereUniqueInput");
let FindUniqueWeightArgs = class FindUniqueWeightArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightWhereUniqueInput_1.WeightWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WeightWhereUniqueInput_1.WeightWhereUniqueInput)
], FindUniqueWeightArgs.prototype, "where", void 0);
FindUniqueWeightArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueWeightArgs);
exports.FindUniqueWeightArgs = FindUniqueWeightArgs;
