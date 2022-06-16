"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteWeightArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WeightWhereUniqueInput_1 = require("../../../inputs/WeightWhereUniqueInput");
let DeleteWeightArgs = class DeleteWeightArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightWhereUniqueInput_1.WeightWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WeightWhereUniqueInput_1.WeightWhereUniqueInput)
], DeleteWeightArgs.prototype, "where", void 0);
DeleteWeightArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteWeightArgs);
exports.DeleteWeightArgs = DeleteWeightArgs;
