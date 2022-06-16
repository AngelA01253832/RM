"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AthleteUpdateWithoutWeightsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DoneWorkoutUpdateManyWithoutAthleteInput_1 = require("../inputs/DoneWorkoutUpdateManyWithoutAthleteInput");
const EnumEnum_GenderFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_GenderFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutAthleteInput_1 = require("../inputs/UserUpdateOneRequiredWithoutAthleteInput");
const WorkoutToDoUpdateManyWithoutAthleteInput_1 = require("../inputs/WorkoutToDoUpdateManyWithoutAthleteInput");
let AthleteUpdateWithoutWeightsInput = class AthleteUpdateWithoutWeightsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AthleteUpdateWithoutWeightsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AthleteUpdateWithoutWeightsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AthleteUpdateWithoutWeightsInput.prototype, "lastname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AthleteUpdateWithoutWeightsInput.prototype, "schoolId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_GenderFieldUpdateOperationsInput_1.EnumEnum_GenderFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_GenderFieldUpdateOperationsInput_1.EnumEnum_GenderFieldUpdateOperationsInput)
], AthleteUpdateWithoutWeightsInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], AthleteUpdateWithoutWeightsInput.prototype, "height", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutAthleteInput_1.UserUpdateOneRequiredWithoutAthleteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutAthleteInput_1.UserUpdateOneRequiredWithoutAthleteInput)
], AthleteUpdateWithoutWeightsInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutUpdateManyWithoutAthleteInput_1.DoneWorkoutUpdateManyWithoutAthleteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DoneWorkoutUpdateManyWithoutAthleteInput_1.DoneWorkoutUpdateManyWithoutAthleteInput)
], AthleteUpdateWithoutWeightsInput.prototype, "DoneWorkouts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoUpdateManyWithoutAthleteInput_1.WorkoutToDoUpdateManyWithoutAthleteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkoutToDoUpdateManyWithoutAthleteInput_1.WorkoutToDoUpdateManyWithoutAthleteInput)
], AthleteUpdateWithoutWeightsInput.prototype, "WorkoutstToDo", void 0);
AthleteUpdateWithoutWeightsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AthleteUpdateWithoutWeightsInput", {
        isAbstract: true
    })
], AthleteUpdateWithoutWeightsInput);
exports.AthleteUpdateWithoutWeightsInput = AthleteUpdateWithoutWeightsInput;
