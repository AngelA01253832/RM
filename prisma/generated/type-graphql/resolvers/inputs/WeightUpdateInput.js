"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AthleteUpdateOneRequiredWithoutWeightsInput_1 = require("../inputs/AthleteUpdateOneRequiredWithoutWeightsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const FloatFieldUpdateOperationsInput_1 = require("../inputs/FloatFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let WeightUpdateInput = class WeightUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], WeightUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], WeightUpdateInput.prototype, "weight", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteUpdateOneRequiredWithoutWeightsInput_1.AthleteUpdateOneRequiredWithoutWeightsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteUpdateOneRequiredWithoutWeightsInput_1.AthleteUpdateOneRequiredWithoutWeightsInput)
], WeightUpdateInput.prototype, "athlete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], WeightUpdateInput.prototype, "date", void 0);
WeightUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WeightUpdateInput", {
        isAbstract: true
    })
], WeightUpdateInput);
exports.WeightUpdateInput = WeightUpdateInput;
