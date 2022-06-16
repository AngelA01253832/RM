"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoachCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkoutToDoCreateNestedManyWithoutCoachInput_1 = require("../inputs/WorkoutToDoCreateNestedManyWithoutCoachInput");
const Enum_Gender_1 = require("../../enums/Enum_Gender");
const Enum_Status_1 = require("../../enums/Enum_Status");
let CoachCreateWithoutUserInput = class CoachCreateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CoachCreateWithoutUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CoachCreateWithoutUserInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CoachCreateWithoutUserInput.prototype, "lastname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CoachCreateWithoutUserInput.prototype, "schoolId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CoachCreateWithoutUserInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Gender_1.Enum_Gender, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CoachCreateWithoutUserInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Status_1.Enum_Status, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CoachCreateWithoutUserInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoCreateNestedManyWithoutCoachInput_1.WorkoutToDoCreateNestedManyWithoutCoachInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkoutToDoCreateNestedManyWithoutCoachInput_1.WorkoutToDoCreateNestedManyWithoutCoachInput)
], CoachCreateWithoutUserInput.prototype, "WorkoutToDo", void 0);
CoachCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CoachCreateWithoutUserInput", {
        isAbstract: true
    })
], CoachCreateWithoutUserInput);
exports.CoachCreateWithoutUserInput = CoachCreateWithoutUserInput;
