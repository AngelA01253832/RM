"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AthleteUpsertWithoutWeightsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AthleteCreateWithoutWeightsInput_1 = require("../inputs/AthleteCreateWithoutWeightsInput");
const AthleteUpdateWithoutWeightsInput_1 = require("../inputs/AthleteUpdateWithoutWeightsInput");
let AthleteUpsertWithoutWeightsInput = class AthleteUpsertWithoutWeightsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteUpdateWithoutWeightsInput_1.AthleteUpdateWithoutWeightsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AthleteUpdateWithoutWeightsInput_1.AthleteUpdateWithoutWeightsInput)
], AthleteUpsertWithoutWeightsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteCreateWithoutWeightsInput_1.AthleteCreateWithoutWeightsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AthleteCreateWithoutWeightsInput_1.AthleteCreateWithoutWeightsInput)
], AthleteUpsertWithoutWeightsInput.prototype, "create", void 0);
AthleteUpsertWithoutWeightsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AthleteUpsertWithoutWeightsInput", {
        isAbstract: true
    })
], AthleteUpsertWithoutWeightsInput);
exports.AthleteUpsertWithoutWeightsInput = AthleteUpsertWithoutWeightsInput;
