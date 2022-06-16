"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AthleteCreateOrConnectWithoutWeightsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AthleteCreateWithoutWeightsInput_1 = require("../inputs/AthleteCreateWithoutWeightsInput");
const AthleteWhereUniqueInput_1 = require("../inputs/AthleteWhereUniqueInput");
let AthleteCreateOrConnectWithoutWeightsInput = class AthleteCreateOrConnectWithoutWeightsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteWhereUniqueInput_1.AthleteWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AthleteWhereUniqueInput_1.AthleteWhereUniqueInput)
], AthleteCreateOrConnectWithoutWeightsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteCreateWithoutWeightsInput_1.AthleteCreateWithoutWeightsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AthleteCreateWithoutWeightsInput_1.AthleteCreateWithoutWeightsInput)
], AthleteCreateOrConnectWithoutWeightsInput.prototype, "create", void 0);
AthleteCreateOrConnectWithoutWeightsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AthleteCreateOrConnectWithoutWeightsInput", {
        isAbstract: true
    })
], AthleteCreateOrConnectWithoutWeightsInput);
exports.AthleteCreateOrConnectWithoutWeightsInput = AthleteCreateOrConnectWithoutWeightsInput;
