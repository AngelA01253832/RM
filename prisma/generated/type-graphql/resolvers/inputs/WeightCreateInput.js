"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AthleteCreateNestedOneWithoutWeightsInput_1 = require("../inputs/AthleteCreateNestedOneWithoutWeightsInput");
let WeightCreateInput = class WeightCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WeightCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], WeightCreateInput.prototype, "weight", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteCreateNestedOneWithoutWeightsInput_1.AthleteCreateNestedOneWithoutWeightsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AthleteCreateNestedOneWithoutWeightsInput_1.AthleteCreateNestedOneWithoutWeightsInput)
], WeightCreateInput.prototype, "athlete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], WeightCreateInput.prototype, "date", void 0);
WeightCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WeightCreateInput", {
        isAbstract: true
    })
], WeightCreateInput);
exports.WeightCreateInput = WeightCreateInput;
