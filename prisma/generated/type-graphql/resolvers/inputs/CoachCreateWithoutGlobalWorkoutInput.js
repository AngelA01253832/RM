"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoachCreateWithoutGlobalWorkoutInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutCoachInput_1 = require("../inputs/UserCreateNestedOneWithoutCoachInput");
const WorkoutToDoCreateNestedManyWithoutCoachInput_1 = require("../inputs/WorkoutToDoCreateNestedManyWithoutCoachInput");
const Enum_Gender_1 = require("../../enums/Enum_Gender");
const Enum_Status_1 = require("../../enums/Enum_Status");
let CoachCreateWithoutGlobalWorkoutInput = class CoachCreateWithoutGlobalWorkoutInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CoachCreateWithoutGlobalWorkoutInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CoachCreateWithoutGlobalWorkoutInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CoachCreateWithoutGlobalWorkoutInput.prototype, "lastname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CoachCreateWithoutGlobalWorkoutInput.prototype, "schoolId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CoachCreateWithoutGlobalWorkoutInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CoachCreateWithoutGlobalWorkoutInput.prototype, "scheduler", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CoachCreateWithoutGlobalWorkoutInput.prototype, "KnowTrainer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Gender_1.Enum_Gender, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CoachCreateWithoutGlobalWorkoutInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Status_1.Enum_Status, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CoachCreateWithoutGlobalWorkoutInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCoachInput_1.UserCreateNestedOneWithoutCoachInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutCoachInput_1.UserCreateNestedOneWithoutCoachInput)
], CoachCreateWithoutGlobalWorkoutInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoCreateNestedManyWithoutCoachInput_1.WorkoutToDoCreateNestedManyWithoutCoachInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkoutToDoCreateNestedManyWithoutCoachInput_1.WorkoutToDoCreateNestedManyWithoutCoachInput)
], CoachCreateWithoutGlobalWorkoutInput.prototype, "WorkoutToDo", void 0);
CoachCreateWithoutGlobalWorkoutInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CoachCreateWithoutGlobalWorkoutInput", {
        isAbstract: true
    })
], CoachCreateWithoutGlobalWorkoutInput);
exports.CoachCreateWithoutGlobalWorkoutInput = CoachCreateWithoutGlobalWorkoutInput;
