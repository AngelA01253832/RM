"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AthleteUpdateOneRequiredWithoutWeightsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AthleteCreateOrConnectWithoutWeightsInput_1 = require("../inputs/AthleteCreateOrConnectWithoutWeightsInput");
const AthleteCreateWithoutWeightsInput_1 = require("../inputs/AthleteCreateWithoutWeightsInput");
const AthleteUpdateWithoutWeightsInput_1 = require("../inputs/AthleteUpdateWithoutWeightsInput");
const AthleteUpsertWithoutWeightsInput_1 = require("../inputs/AthleteUpsertWithoutWeightsInput");
const AthleteWhereUniqueInput_1 = require("../inputs/AthleteWhereUniqueInput");
let AthleteUpdateOneRequiredWithoutWeightsInput = class AthleteUpdateOneRequiredWithoutWeightsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteCreateWithoutWeightsInput_1.AthleteCreateWithoutWeightsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteCreateWithoutWeightsInput_1.AthleteCreateWithoutWeightsInput)
], AthleteUpdateOneRequiredWithoutWeightsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteCreateOrConnectWithoutWeightsInput_1.AthleteCreateOrConnectWithoutWeightsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteCreateOrConnectWithoutWeightsInput_1.AthleteCreateOrConnectWithoutWeightsInput)
], AthleteUpdateOneRequiredWithoutWeightsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteUpsertWithoutWeightsInput_1.AthleteUpsertWithoutWeightsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteUpsertWithoutWeightsInput_1.AthleteUpsertWithoutWeightsInput)
], AthleteUpdateOneRequiredWithoutWeightsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteWhereUniqueInput_1.AthleteWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteWhereUniqueInput_1.AthleteWhereUniqueInput)
], AthleteUpdateOneRequiredWithoutWeightsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteUpdateWithoutWeightsInput_1.AthleteUpdateWithoutWeightsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteUpdateWithoutWeightsInput_1.AthleteUpdateWithoutWeightsInput)
], AthleteUpdateOneRequiredWithoutWeightsInput.prototype, "update", void 0);
AthleteUpdateOneRequiredWithoutWeightsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AthleteUpdateOneRequiredWithoutWeightsInput", {
        isAbstract: true
    })
], AthleteUpdateOneRequiredWithoutWeightsInput);
exports.AthleteUpdateOneRequiredWithoutWeightsInput = AthleteUpdateOneRequiredWithoutWeightsInput;
