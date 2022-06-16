"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AthleteCreateWithoutWeightsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DoneWorkoutCreateNestedManyWithoutAthleteInput_1 = require("../inputs/DoneWorkoutCreateNestedManyWithoutAthleteInput");
const UserCreateNestedOneWithoutAthleteInput_1 = require("../inputs/UserCreateNestedOneWithoutAthleteInput");
const WorkoutToDoCreateNestedManyWithoutAthleteInput_1 = require("../inputs/WorkoutToDoCreateNestedManyWithoutAthleteInput");
const Enum_Gender_1 = require("../../enums/Enum_Gender");
let AthleteCreateWithoutWeightsInput = class AthleteCreateWithoutWeightsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AthleteCreateWithoutWeightsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AthleteCreateWithoutWeightsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AthleteCreateWithoutWeightsInput.prototype, "lastname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AthleteCreateWithoutWeightsInput.prototype, "schoolId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Gender_1.Enum_Gender, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AthleteCreateWithoutWeightsInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], AthleteCreateWithoutWeightsInput.prototype, "height", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutAthleteInput_1.UserCreateNestedOneWithoutAthleteInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutAthleteInput_1.UserCreateNestedOneWithoutAthleteInput)
], AthleteCreateWithoutWeightsInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutCreateNestedManyWithoutAthleteInput_1.DoneWorkoutCreateNestedManyWithoutAthleteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DoneWorkoutCreateNestedManyWithoutAthleteInput_1.DoneWorkoutCreateNestedManyWithoutAthleteInput)
], AthleteCreateWithoutWeightsInput.prototype, "DoneWorkouts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoCreateNestedManyWithoutAthleteInput_1.WorkoutToDoCreateNestedManyWithoutAthleteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkoutToDoCreateNestedManyWithoutAthleteInput_1.WorkoutToDoCreateNestedManyWithoutAthleteInput)
], AthleteCreateWithoutWeightsInput.prototype, "WorkoutstToDo", void 0);
AthleteCreateWithoutWeightsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AthleteCreateWithoutWeightsInput", {
        isAbstract: true
    })
], AthleteCreateWithoutWeightsInput);
exports.AthleteCreateWithoutWeightsInput = AthleteCreateWithoutWeightsInput;
