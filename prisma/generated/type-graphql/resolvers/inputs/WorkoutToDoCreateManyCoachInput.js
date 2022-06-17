"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutToDoCreateManyCoachInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_Goal_1 = require("../../enums/Enum_Goal");
let WorkoutToDoCreateManyCoachInput = class WorkoutToDoCreateManyCoachInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoCreateManyCoachInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], WorkoutToDoCreateManyCoachInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoCreateManyCoachInput.prototype, "indications", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Goal_1.Enum_Goal, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoCreateManyCoachInput.prototype, "goal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], WorkoutToDoCreateManyCoachInput.prototype, "goalvalue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoCreateManyCoachInput.prototype, "athleteId", void 0);
WorkoutToDoCreateManyCoachInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkoutToDoCreateManyCoachInput", {
        isAbstract: true
    })
], WorkoutToDoCreateManyCoachInput);
exports.WorkoutToDoCreateManyCoachInput = WorkoutToDoCreateManyCoachInput;
