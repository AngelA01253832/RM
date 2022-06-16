"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutToDoCreateWithoutAthleteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CoachCreateNestedOneWithoutWorkoutToDoInput_1 = require("../inputs/CoachCreateNestedOneWithoutWorkoutToDoInput");
const Enum_Goal_1 = require("../../enums/Enum_Goal");
let WorkoutToDoCreateWithoutAthleteInput = class WorkoutToDoCreateWithoutAthleteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoCreateWithoutAthleteInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachCreateNestedOneWithoutWorkoutToDoInput_1.CoachCreateNestedOneWithoutWorkoutToDoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CoachCreateNestedOneWithoutWorkoutToDoInput_1.CoachCreateNestedOneWithoutWorkoutToDoInput)
], WorkoutToDoCreateWithoutAthleteInput.prototype, "coach", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], WorkoutToDoCreateWithoutAthleteInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Goal_1.Enum_Goal, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoCreateWithoutAthleteInput.prototype, "goal", void 0);
WorkoutToDoCreateWithoutAthleteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkoutToDoCreateWithoutAthleteInput", {
        isAbstract: true
    })
], WorkoutToDoCreateWithoutAthleteInput);
exports.WorkoutToDoCreateWithoutAthleteInput = WorkoutToDoCreateWithoutAthleteInput;
