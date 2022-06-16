"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutToDoOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AthleteOrderByWithRelationInput_1 = require("../inputs/AthleteOrderByWithRelationInput");
const CoachOrderByWithRelationInput_1 = require("../inputs/CoachOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let WorkoutToDoOrderByWithRelationInput = class WorkoutToDoOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachOrderByWithRelationInput_1.CoachOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachOrderByWithRelationInput_1.CoachOrderByWithRelationInput)
], WorkoutToDoOrderByWithRelationInput.prototype, "coach", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteOrderByWithRelationInput_1.AthleteOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteOrderByWithRelationInput_1.AthleteOrderByWithRelationInput)
], WorkoutToDoOrderByWithRelationInput.prototype, "athlete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoOrderByWithRelationInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoOrderByWithRelationInput.prototype, "goal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoOrderByWithRelationInput.prototype, "coachId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoOrderByWithRelationInput.prototype, "athleteId", void 0);
WorkoutToDoOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkoutToDoOrderByWithRelationInput", {
        isAbstract: true
    })
], WorkoutToDoOrderByWithRelationInput);
exports.WorkoutToDoOrderByWithRelationInput = WorkoutToDoOrderByWithRelationInput;
