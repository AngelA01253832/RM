"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AthleteUpdateWithoutDoneWorkoutsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumEnum_GenderFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_GenderFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutAthleteInput_1 = require("../inputs/UserUpdateOneRequiredWithoutAthleteInput");
const WeightUpdateManyWithoutAthleteInput_1 = require("../inputs/WeightUpdateManyWithoutAthleteInput");
const WorkoutToDoUpdateManyWithoutAthleteInput_1 = require("../inputs/WorkoutToDoUpdateManyWithoutAthleteInput");
let AthleteUpdateWithoutDoneWorkoutsInput = class AthleteUpdateWithoutDoneWorkoutsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AthleteUpdateWithoutDoneWorkoutsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AthleteUpdateWithoutDoneWorkoutsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AthleteUpdateWithoutDoneWorkoutsInput.prototype, "lastname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AthleteUpdateWithoutDoneWorkoutsInput.prototype, "schoolId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_GenderFieldUpdateOperationsInput_1.EnumEnum_GenderFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_GenderFieldUpdateOperationsInput_1.EnumEnum_GenderFieldUpdateOperationsInput)
], AthleteUpdateWithoutDoneWorkoutsInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], AthleteUpdateWithoutDoneWorkoutsInput.prototype, "height", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutAthleteInput_1.UserUpdateOneRequiredWithoutAthleteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutAthleteInput_1.UserUpdateOneRequiredWithoutAthleteInput)
], AthleteUpdateWithoutDoneWorkoutsInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightUpdateManyWithoutAthleteInput_1.WeightUpdateManyWithoutAthleteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WeightUpdateManyWithoutAthleteInput_1.WeightUpdateManyWithoutAthleteInput)
], AthleteUpdateWithoutDoneWorkoutsInput.prototype, "Weights", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoUpdateManyWithoutAthleteInput_1.WorkoutToDoUpdateManyWithoutAthleteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkoutToDoUpdateManyWithoutAthleteInput_1.WorkoutToDoUpdateManyWithoutAthleteInput)
], AthleteUpdateWithoutDoneWorkoutsInput.prototype, "WorkoutstToDo", void 0);
AthleteUpdateWithoutDoneWorkoutsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AthleteUpdateWithoutDoneWorkoutsInput", {
        isAbstract: true
    })
], AthleteUpdateWithoutDoneWorkoutsInput);
exports.AthleteUpdateWithoutDoneWorkoutsInput = AthleteUpdateWithoutDoneWorkoutsInput;
