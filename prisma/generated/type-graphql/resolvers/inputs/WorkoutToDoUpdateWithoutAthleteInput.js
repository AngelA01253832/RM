"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutToDoUpdateWithoutAthleteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CoachUpdateOneRequiredWithoutWorkoutToDoInput_1 = require("../inputs/CoachUpdateOneRequiredWithoutWorkoutToDoInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumEnum_GoalFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_GoalFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let WorkoutToDoUpdateWithoutAthleteInput = class WorkoutToDoUpdateWithoutAthleteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], WorkoutToDoUpdateWithoutAthleteInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachUpdateOneRequiredWithoutWorkoutToDoInput_1.CoachUpdateOneRequiredWithoutWorkoutToDoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachUpdateOneRequiredWithoutWorkoutToDoInput_1.CoachUpdateOneRequiredWithoutWorkoutToDoInput)
], WorkoutToDoUpdateWithoutAthleteInput.prototype, "coach", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], WorkoutToDoUpdateWithoutAthleteInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_GoalFieldUpdateOperationsInput_1.EnumEnum_GoalFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_GoalFieldUpdateOperationsInput_1.EnumEnum_GoalFieldUpdateOperationsInput)
], WorkoutToDoUpdateWithoutAthleteInput.prototype, "goal", void 0);
WorkoutToDoUpdateWithoutAthleteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkoutToDoUpdateWithoutAthleteInput", {
        isAbstract: true
    })
], WorkoutToDoUpdateWithoutAthleteInput);
exports.WorkoutToDoUpdateWithoutAthleteInput = WorkoutToDoUpdateWithoutAthleteInput;
