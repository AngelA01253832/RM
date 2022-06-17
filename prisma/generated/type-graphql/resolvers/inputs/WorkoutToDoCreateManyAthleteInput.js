"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutToDoCreateManyAthleteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_Goal_1 = require("../../enums/Enum_Goal");
let WorkoutToDoCreateManyAthleteInput = class WorkoutToDoCreateManyAthleteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoCreateManyAthleteInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], WorkoutToDoCreateManyAthleteInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoCreateManyAthleteInput.prototype, "indications", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Goal_1.Enum_Goal, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoCreateManyAthleteInput.prototype, "goal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], WorkoutToDoCreateManyAthleteInput.prototype, "goalvalue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoCreateManyAthleteInput.prototype, "coachId", void 0);
WorkoutToDoCreateManyAthleteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkoutToDoCreateManyAthleteInput", {
        isAbstract: true
    })
], WorkoutToDoCreateManyAthleteInput);
exports.WorkoutToDoCreateManyAthleteInput = WorkoutToDoCreateManyAthleteInput;
