"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AthleteUpdateWithoutWorkoutstToDoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DoneWorkoutUpdateManyWithoutAthleteInput_1 = require("../inputs/DoneWorkoutUpdateManyWithoutAthleteInput");
const EnumEnum_GenderFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_GenderFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutAthleteInput_1 = require("../inputs/UserUpdateOneRequiredWithoutAthleteInput");
const WeightUpdateManyWithoutAthleteInput_1 = require("../inputs/WeightUpdateManyWithoutAthleteInput");
let AthleteUpdateWithoutWorkoutstToDoInput = class AthleteUpdateWithoutWorkoutstToDoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AthleteUpdateWithoutWorkoutstToDoInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AthleteUpdateWithoutWorkoutstToDoInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AthleteUpdateWithoutWorkoutstToDoInput.prototype, "lastname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AthleteUpdateWithoutWorkoutstToDoInput.prototype, "schoolId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_GenderFieldUpdateOperationsInput_1.EnumEnum_GenderFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_GenderFieldUpdateOperationsInput_1.EnumEnum_GenderFieldUpdateOperationsInput)
], AthleteUpdateWithoutWorkoutstToDoInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], AthleteUpdateWithoutWorkoutstToDoInput.prototype, "height", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutAthleteInput_1.UserUpdateOneRequiredWithoutAthleteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutAthleteInput_1.UserUpdateOneRequiredWithoutAthleteInput)
], AthleteUpdateWithoutWorkoutstToDoInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightUpdateManyWithoutAthleteInput_1.WeightUpdateManyWithoutAthleteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WeightUpdateManyWithoutAthleteInput_1.WeightUpdateManyWithoutAthleteInput)
], AthleteUpdateWithoutWorkoutstToDoInput.prototype, "Weights", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutUpdateManyWithoutAthleteInput_1.DoneWorkoutUpdateManyWithoutAthleteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DoneWorkoutUpdateManyWithoutAthleteInput_1.DoneWorkoutUpdateManyWithoutAthleteInput)
], AthleteUpdateWithoutWorkoutstToDoInput.prototype, "DoneWorkouts", void 0);
AthleteUpdateWithoutWorkoutstToDoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AthleteUpdateWithoutWorkoutstToDoInput", {
        isAbstract: true
    })
], AthleteUpdateWithoutWorkoutstToDoInput);
exports.AthleteUpdateWithoutWorkoutstToDoInput = AthleteUpdateWithoutWorkoutstToDoInput;
