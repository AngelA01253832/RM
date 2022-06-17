"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutToDoUpdateWithoutCoachInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AthleteUpdateOneRequiredWithoutWorkoutstToDoInput_1 = require("../inputs/AthleteUpdateOneRequiredWithoutWorkoutstToDoInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumEnum_GoalFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_GoalFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let WorkoutToDoUpdateWithoutCoachInput = class WorkoutToDoUpdateWithoutCoachInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], WorkoutToDoUpdateWithoutCoachInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteUpdateOneRequiredWithoutWorkoutstToDoInput_1.AthleteUpdateOneRequiredWithoutWorkoutstToDoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteUpdateOneRequiredWithoutWorkoutstToDoInput_1.AthleteUpdateOneRequiredWithoutWorkoutstToDoInput)
], WorkoutToDoUpdateWithoutCoachInput.prototype, "athlete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], WorkoutToDoUpdateWithoutCoachInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], WorkoutToDoUpdateWithoutCoachInput.prototype, "indications", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_GoalFieldUpdateOperationsInput_1.EnumEnum_GoalFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_GoalFieldUpdateOperationsInput_1.EnumEnum_GoalFieldUpdateOperationsInput)
], WorkoutToDoUpdateWithoutCoachInput.prototype, "goal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], WorkoutToDoUpdateWithoutCoachInput.prototype, "goalvalue", void 0);
WorkoutToDoUpdateWithoutCoachInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkoutToDoUpdateWithoutCoachInput", {
        isAbstract: true
    })
], WorkoutToDoUpdateWithoutCoachInput);
exports.WorkoutToDoUpdateWithoutCoachInput = WorkoutToDoUpdateWithoutCoachInput;
