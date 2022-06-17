"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoachCreateWithoutWorkoutToDoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GlobalWorkoutCreateNestedManyWithoutCoachInput_1 = require("../inputs/GlobalWorkoutCreateNestedManyWithoutCoachInput");
const UserCreateNestedOneWithoutCoachInput_1 = require("../inputs/UserCreateNestedOneWithoutCoachInput");
const Enum_Gender_1 = require("../../enums/Enum_Gender");
const Enum_Status_1 = require("../../enums/Enum_Status");
let CoachCreateWithoutWorkoutToDoInput = class CoachCreateWithoutWorkoutToDoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CoachCreateWithoutWorkoutToDoInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CoachCreateWithoutWorkoutToDoInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CoachCreateWithoutWorkoutToDoInput.prototype, "lastname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CoachCreateWithoutWorkoutToDoInput.prototype, "schoolId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CoachCreateWithoutWorkoutToDoInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CoachCreateWithoutWorkoutToDoInput.prototype, "scheduler", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CoachCreateWithoutWorkoutToDoInput.prototype, "KnowTrainer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Gender_1.Enum_Gender, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CoachCreateWithoutWorkoutToDoInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Status_1.Enum_Status, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CoachCreateWithoutWorkoutToDoInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCoachInput_1.UserCreateNestedOneWithoutCoachInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutCoachInput_1.UserCreateNestedOneWithoutCoachInput)
], CoachCreateWithoutWorkoutToDoInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlobalWorkoutCreateNestedManyWithoutCoachInput_1.GlobalWorkoutCreateNestedManyWithoutCoachInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlobalWorkoutCreateNestedManyWithoutCoachInput_1.GlobalWorkoutCreateNestedManyWithoutCoachInput)
], CoachCreateWithoutWorkoutToDoInput.prototype, "GlobalWorkout", void 0);
CoachCreateWithoutWorkoutToDoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CoachCreateWithoutWorkoutToDoInput", {
        isAbstract: true
    })
], CoachCreateWithoutWorkoutToDoInput);
exports.CoachCreateWithoutWorkoutToDoInput = CoachCreateWithoutWorkoutToDoInput;
