"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoachCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GlobalWorkoutCreateNestedManyWithoutCoachInput_1 = require("../inputs/GlobalWorkoutCreateNestedManyWithoutCoachInput");
const UserCreateNestedOneWithoutCoachInput_1 = require("../inputs/UserCreateNestedOneWithoutCoachInput");
const WorkoutToDoCreateNestedManyWithoutCoachInput_1 = require("../inputs/WorkoutToDoCreateNestedManyWithoutCoachInput");
const Enum_Gender_1 = require("../../enums/Enum_Gender");
const Enum_Status_1 = require("../../enums/Enum_Status");
let CoachCreateInput = class CoachCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CoachCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CoachCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CoachCreateInput.prototype, "lastname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CoachCreateInput.prototype, "schoolId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CoachCreateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CoachCreateInput.prototype, "scheduler", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CoachCreateInput.prototype, "KnowTrainer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Gender_1.Enum_Gender, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CoachCreateInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Status_1.Enum_Status, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CoachCreateInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCoachInput_1.UserCreateNestedOneWithoutCoachInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutCoachInput_1.UserCreateNestedOneWithoutCoachInput)
], CoachCreateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoCreateNestedManyWithoutCoachInput_1.WorkoutToDoCreateNestedManyWithoutCoachInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkoutToDoCreateNestedManyWithoutCoachInput_1.WorkoutToDoCreateNestedManyWithoutCoachInput)
], CoachCreateInput.prototype, "WorkoutToDo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlobalWorkoutCreateNestedManyWithoutCoachInput_1.GlobalWorkoutCreateNestedManyWithoutCoachInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlobalWorkoutCreateNestedManyWithoutCoachInput_1.GlobalWorkoutCreateNestedManyWithoutCoachInput)
], CoachCreateInput.prototype, "GlobalWorkout", void 0);
CoachCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CoachCreateInput", {
        isAbstract: true
    })
], CoachCreateInput);
exports.CoachCreateInput = CoachCreateInput;
