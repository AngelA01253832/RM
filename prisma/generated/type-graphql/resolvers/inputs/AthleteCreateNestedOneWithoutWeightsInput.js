"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AthleteCreateNestedOneWithoutWeightsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AthleteCreateOrConnectWithoutWeightsInput_1 = require("../inputs/AthleteCreateOrConnectWithoutWeightsInput");
const AthleteCreateWithoutWeightsInput_1 = require("../inputs/AthleteCreateWithoutWeightsInput");
const AthleteWhereUniqueInput_1 = require("../inputs/AthleteWhereUniqueInput");
let AthleteCreateNestedOneWithoutWeightsInput = class AthleteCreateNestedOneWithoutWeightsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteCreateWithoutWeightsInput_1.AthleteCreateWithoutWeightsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteCreateWithoutWeightsInput_1.AthleteCreateWithoutWeightsInput)
], AthleteCreateNestedOneWithoutWeightsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteCreateOrConnectWithoutWeightsInput_1.AthleteCreateOrConnectWithoutWeightsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteCreateOrConnectWithoutWeightsInput_1.AthleteCreateOrConnectWithoutWeightsInput)
], AthleteCreateNestedOneWithoutWeightsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteWhereUniqueInput_1.AthleteWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteWhereUniqueInput_1.AthleteWhereUniqueInput)
], AthleteCreateNestedOneWithoutWeightsInput.prototype, "connect", void 0);
AthleteCreateNestedOneWithoutWeightsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AthleteCreateNestedOneWithoutWeightsInput", {
        isAbstract: true
    })
], AthleteCreateNestedOneWithoutWeightsInput);
exports.AthleteCreateNestedOneWithoutWeightsInput = AthleteCreateNestedOneWithoutWeightsInput;
