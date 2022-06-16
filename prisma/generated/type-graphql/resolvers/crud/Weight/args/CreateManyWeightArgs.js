"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyWeightArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WeightCreateManyInput_1 = require("../../../inputs/WeightCreateManyInput");
let CreateManyWeightArgs = class CreateManyWeightArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WeightCreateManyInput_1.WeightCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyWeightArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyWeightArgs.prototype, "skipDuplicates", void 0);
CreateManyWeightArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyWeightArgs);
exports.CreateManyWeightArgs = CreateManyWeightArgs;
