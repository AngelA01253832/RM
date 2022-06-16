"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AthleteOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DoneWorkoutOrderByRelationAggregateInput_1 = require("../inputs/DoneWorkoutOrderByRelationAggregateInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const WeightOrderByRelationAggregateInput_1 = require("../inputs/WeightOrderByRelationAggregateInput");
const WorkoutToDoOrderByRelationAggregateInput_1 = require("../inputs/WorkoutToDoOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AthleteOrderByWithRelationInput = class AthleteOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AthleteOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AthleteOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AthleteOrderByWithRelationInput.prototype, "lastname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AthleteOrderByWithRelationInput.prototype, "schoolId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AthleteOrderByWithRelationInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AthleteOrderByWithRelationInput.prototype, "height", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], AthleteOrderByWithRelationInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightOrderByRelationAggregateInput_1.WeightOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WeightOrderByRelationAggregateInput_1.WeightOrderByRelationAggregateInput)
], AthleteOrderByWithRelationInput.prototype, "Weights", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutOrderByRelationAggregateInput_1.DoneWorkoutOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DoneWorkoutOrderByRelationAggregateInput_1.DoneWorkoutOrderByRelationAggregateInput)
], AthleteOrderByWithRelationInput.prototype, "DoneWorkouts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoOrderByRelationAggregateInput_1.WorkoutToDoOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkoutToDoOrderByRelationAggregateInput_1.WorkoutToDoOrderByRelationAggregateInput)
], AthleteOrderByWithRelationInput.prototype, "WorkoutstToDo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AthleteOrderByWithRelationInput.prototype, "userId", void 0);
AthleteOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AthleteOrderByWithRelationInput", {
        isAbstract: true
    })
], AthleteOrderByWithRelationInput);
exports.AthleteOrderByWithRelationInput = AthleteOrderByWithRelationInput;
