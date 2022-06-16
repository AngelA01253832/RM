"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoneWorkoutUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AthleteUpdateOneRequiredWithoutDoneWorkoutsInput_1 = require("../inputs/AthleteUpdateOneRequiredWithoutDoneWorkoutsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const FloatFieldUpdateOperationsInput_1 = require("../inputs/FloatFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let DoneWorkoutUpdateInput = class DoneWorkoutUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], DoneWorkoutUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteUpdateOneRequiredWithoutDoneWorkoutsInput_1.AthleteUpdateOneRequiredWithoutDoneWorkoutsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteUpdateOneRequiredWithoutDoneWorkoutsInput_1.AthleteUpdateOneRequiredWithoutDoneWorkoutsInput)
], DoneWorkoutUpdateInput.prototype, "athlete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], DoneWorkoutUpdateInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], DoneWorkoutUpdateInput.prototype, "calories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], DoneWorkoutUpdateInput.prototype, "time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], DoneWorkoutUpdateInput.prototype, "distance", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], DoneWorkoutUpdateInput.prototype, "intensity", void 0);
DoneWorkoutUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DoneWorkoutUpdateInput", {
        isAbstract: true
    })
], DoneWorkoutUpdateInput);
exports.DoneWorkoutUpdateInput = DoneWorkoutUpdateInput;
