"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutToDoCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AthleteCreateNestedOneWithoutWorkoutstToDoInput_1 = require("../inputs/AthleteCreateNestedOneWithoutWorkoutstToDoInput");
const CoachCreateNestedOneWithoutWorkoutToDoInput_1 = require("../inputs/CoachCreateNestedOneWithoutWorkoutToDoInput");
const Enum_Goal_1 = require("../../enums/Enum_Goal");
let WorkoutToDoCreateInput = class WorkoutToDoCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachCreateNestedOneWithoutWorkoutToDoInput_1.CoachCreateNestedOneWithoutWorkoutToDoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CoachCreateNestedOneWithoutWorkoutToDoInput_1.CoachCreateNestedOneWithoutWorkoutToDoInput)
], WorkoutToDoCreateInput.prototype, "coach", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteCreateNestedOneWithoutWorkoutstToDoInput_1.AthleteCreateNestedOneWithoutWorkoutstToDoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AthleteCreateNestedOneWithoutWorkoutstToDoInput_1.AthleteCreateNestedOneWithoutWorkoutstToDoInput)
], WorkoutToDoCreateInput.prototype, "athlete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], WorkoutToDoCreateInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Goal_1.Enum_Goal, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoCreateInput.prototype, "goal", void 0);
WorkoutToDoCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkoutToDoCreateInput", {
        isAbstract: true
    })
], WorkoutToDoCreateInput);
exports.WorkoutToDoCreateInput = WorkoutToDoCreateInput;
