"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoachOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GlobalWorkoutOrderByRelationAggregateInput_1 = require("../inputs/GlobalWorkoutOrderByRelationAggregateInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const WorkoutToDoOrderByRelationAggregateInput_1 = require("../inputs/WorkoutToDoOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CoachOrderByWithRelationInput = class CoachOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CoachOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CoachOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CoachOrderByWithRelationInput.prototype, "lastname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CoachOrderByWithRelationInput.prototype, "schoolId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CoachOrderByWithRelationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CoachOrderByWithRelationInput.prototype, "scheduler", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CoachOrderByWithRelationInput.prototype, "KnowTrainer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CoachOrderByWithRelationInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CoachOrderByWithRelationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], CoachOrderByWithRelationInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CoachOrderByWithRelationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoOrderByRelationAggregateInput_1.WorkoutToDoOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkoutToDoOrderByRelationAggregateInput_1.WorkoutToDoOrderByRelationAggregateInput)
], CoachOrderByWithRelationInput.prototype, "WorkoutToDo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlobalWorkoutOrderByRelationAggregateInput_1.GlobalWorkoutOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlobalWorkoutOrderByRelationAggregateInput_1.GlobalWorkoutOrderByRelationAggregateInput)
], CoachOrderByWithRelationInput.prototype, "GlobalWorkout", void 0);
CoachOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CoachOrderByWithRelationInput", {
        isAbstract: true
    })
], CoachOrderByWithRelationInput);
exports.CoachOrderByWithRelationInput = CoachOrderByWithRelationInput;
