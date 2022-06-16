"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AthleteCreateWithoutWorkoutstToDoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DoneWorkoutCreateNestedManyWithoutAthleteInput_1 = require("../inputs/DoneWorkoutCreateNestedManyWithoutAthleteInput");
const UserCreateNestedOneWithoutAthleteInput_1 = require("../inputs/UserCreateNestedOneWithoutAthleteInput");
const WeightCreateNestedManyWithoutAthleteInput_1 = require("../inputs/WeightCreateNestedManyWithoutAthleteInput");
const Enum_Gender_1 = require("../../enums/Enum_Gender");
let AthleteCreateWithoutWorkoutstToDoInput = class AthleteCreateWithoutWorkoutstToDoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AthleteCreateWithoutWorkoutstToDoInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AthleteCreateWithoutWorkoutstToDoInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AthleteCreateWithoutWorkoutstToDoInput.prototype, "lastname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AthleteCreateWithoutWorkoutstToDoInput.prototype, "schoolId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Gender_1.Enum_Gender, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AthleteCreateWithoutWorkoutstToDoInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], AthleteCreateWithoutWorkoutstToDoInput.prototype, "height", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutAthleteInput_1.UserCreateNestedOneWithoutAthleteInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutAthleteInput_1.UserCreateNestedOneWithoutAthleteInput)
], AthleteCreateWithoutWorkoutstToDoInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightCreateNestedManyWithoutAthleteInput_1.WeightCreateNestedManyWithoutAthleteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WeightCreateNestedManyWithoutAthleteInput_1.WeightCreateNestedManyWithoutAthleteInput)
], AthleteCreateWithoutWorkoutstToDoInput.prototype, "Weights", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutCreateNestedManyWithoutAthleteInput_1.DoneWorkoutCreateNestedManyWithoutAthleteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DoneWorkoutCreateNestedManyWithoutAthleteInput_1.DoneWorkoutCreateNestedManyWithoutAthleteInput)
], AthleteCreateWithoutWorkoutstToDoInput.prototype, "DoneWorkouts", void 0);
AthleteCreateWithoutWorkoutstToDoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AthleteCreateWithoutWorkoutstToDoInput", {
        isAbstract: true
    })
], AthleteCreateWithoutWorkoutstToDoInput);
exports.AthleteCreateWithoutWorkoutstToDoInput = AthleteCreateWithoutWorkoutstToDoInput;
