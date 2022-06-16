"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyWeightArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WeightWhereInput_1 = require("../../../inputs/WeightWhereInput");
let DeleteManyWeightArgs = class DeleteManyWeightArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightWhereInput_1.WeightWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WeightWhereInput_1.WeightWhereInput)
], DeleteManyWeightArgs.prototype, "where", void 0);
DeleteManyWeightArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyWeightArgs);
exports.DeleteManyWeightArgs = DeleteManyWeightArgs;
