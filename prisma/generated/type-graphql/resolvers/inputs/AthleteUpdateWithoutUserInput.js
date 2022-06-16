"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AthleteUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DoneWorkoutUpdateManyWithoutAthleteInput_1 = require("../inputs/DoneWorkoutUpdateManyWithoutAthleteInput");
const EnumEnum_GenderFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_GenderFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const WeightUpdateManyWithoutAthleteInput_1 = require("../inputs/WeightUpdateManyWithoutAthleteInput");
const WorkoutToDoUpdateManyWithoutAthleteInput_1 = require("../inputs/WorkoutToDoUpdateManyWithoutAthleteInput");
let AthleteUpdateWithoutUserInput = class AthleteUpdateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AthleteUpdateWithoutUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AthleteUpdateWithoutUserInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AthleteUpdateWithoutUserInput.prototype, "lastname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AthleteUpdateWithoutUserInput.prototype, "schoolId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_GenderFieldUpdateOperationsInput_1.EnumEnum_GenderFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_GenderFieldUpdateOperationsInput_1.EnumEnum_GenderFieldUpdateOperationsInput)
], AthleteUpdateWithoutUserInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], AthleteUpdateWithoutUserInput.prototype, "height", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightUpdateManyWithoutAthleteInput_1.WeightUpdateManyWithoutAthleteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WeightUpdateManyWithoutAthleteInput_1.WeightUpdateManyWithoutAthleteInput)
], AthleteUpdateWithoutUserInput.prototype, "Weights", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutUpdateManyWithoutAthleteInput_1.DoneWorkoutUpdateManyWithoutAthleteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DoneWorkoutUpdateManyWithoutAthleteInput_1.DoneWorkoutUpdateManyWithoutAthleteInput)
], AthleteUpdateWithoutUserInput.prototype, "DoneWorkouts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoUpdateManyWithoutAthleteInput_1.WorkoutToDoUpdateManyWithoutAthleteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkoutToDoUpdateManyWithoutAthleteInput_1.WorkoutToDoUpdateManyWithoutAthleteInput)
], AthleteUpdateWithoutUserInput.prototype, "WorkoutstToDo", void 0);
AthleteUpdateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AthleteUpdateWithoutUserInput", {
        isAbstract: true
    })
], AthleteUpdateWithoutUserInput);
exports.AthleteUpdateWithoutUserInput = AthleteUpdateWithoutUserInput;
