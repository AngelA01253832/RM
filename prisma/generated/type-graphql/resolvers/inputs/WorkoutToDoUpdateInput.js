"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutToDoUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AthleteUpdateOneRequiredWithoutWorkoutstToDoInput_1 = require("../inputs/AthleteUpdateOneRequiredWithoutWorkoutstToDoInput");
const CoachUpdateOneRequiredWithoutWorkoutToDoInput_1 = require("../inputs/CoachUpdateOneRequiredWithoutWorkoutToDoInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumEnum_GoalFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_GoalFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let WorkoutToDoUpdateInput = class WorkoutToDoUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], WorkoutToDoUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachUpdateOneRequiredWithoutWorkoutToDoInput_1.CoachUpdateOneRequiredWithoutWorkoutToDoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachUpdateOneRequiredWithoutWorkoutToDoInput_1.CoachUpdateOneRequiredWithoutWorkoutToDoInput)
], WorkoutToDoUpdateInput.prototype, "coach", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteUpdateOneRequiredWithoutWorkoutstToDoInput_1.AthleteUpdateOneRequiredWithoutWorkoutstToDoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteUpdateOneRequiredWithoutWorkoutstToDoInput_1.AthleteUpdateOneRequiredWithoutWorkoutstToDoInput)
], WorkoutToDoUpdateInput.prototype, "athlete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], WorkoutToDoUpdateInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], WorkoutToDoUpdateInput.prototype, "indications", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_GoalFieldUpdateOperationsInput_1.EnumEnum_GoalFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_GoalFieldUpdateOperationsInput_1.EnumEnum_GoalFieldUpdateOperationsInput)
], WorkoutToDoUpdateInput.prototype, "goal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], WorkoutToDoUpdateInput.prototype, "goalvalue", void 0);
WorkoutToDoUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkoutToDoUpdateInput", {
        isAbstract: true
    })
], WorkoutToDoUpdateInput);
exports.WorkoutToDoUpdateInput = WorkoutToDoUpdateInput;
