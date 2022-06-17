"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutToDoCreateWithoutCoachInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AthleteCreateNestedOneWithoutWorkoutstToDoInput_1 = require("../inputs/AthleteCreateNestedOneWithoutWorkoutstToDoInput");
const Enum_Goal_1 = require("../../enums/Enum_Goal");
let WorkoutToDoCreateWithoutCoachInput = class WorkoutToDoCreateWithoutCoachInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoCreateWithoutCoachInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteCreateNestedOneWithoutWorkoutstToDoInput_1.AthleteCreateNestedOneWithoutWorkoutstToDoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AthleteCreateNestedOneWithoutWorkoutstToDoInput_1.AthleteCreateNestedOneWithoutWorkoutstToDoInput)
], WorkoutToDoCreateWithoutCoachInput.prototype, "athlete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], WorkoutToDoCreateWithoutCoachInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoCreateWithoutCoachInput.prototype, "indications", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Goal_1.Enum_Goal, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoCreateWithoutCoachInput.prototype, "goal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], WorkoutToDoCreateWithoutCoachInput.prototype, "goalvalue", void 0);
WorkoutToDoCreateWithoutCoachInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkoutToDoCreateWithoutCoachInput", {
        isAbstract: true
    })
], WorkoutToDoCreateWithoutCoachInput);
exports.WorkoutToDoCreateWithoutCoachInput = WorkoutToDoCreateWithoutCoachInput;
