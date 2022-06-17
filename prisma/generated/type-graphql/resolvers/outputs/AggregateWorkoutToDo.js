"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateWorkoutToDo = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkoutToDoAvgAggregate_1 = require("../outputs/WorkoutToDoAvgAggregate");
const WorkoutToDoCountAggregate_1 = require("../outputs/WorkoutToDoCountAggregate");
const WorkoutToDoMaxAggregate_1 = require("../outputs/WorkoutToDoMaxAggregate");
const WorkoutToDoMinAggregate_1 = require("../outputs/WorkoutToDoMinAggregate");
const WorkoutToDoSumAggregate_1 = require("../outputs/WorkoutToDoSumAggregate");
let AggregateWorkoutToDo = class AggregateWorkoutToDo {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoCountAggregate_1.WorkoutToDoCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkoutToDoCountAggregate_1.WorkoutToDoCountAggregate)
], AggregateWorkoutToDo.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoAvgAggregate_1.WorkoutToDoAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkoutToDoAvgAggregate_1.WorkoutToDoAvgAggregate)
], AggregateWorkoutToDo.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoSumAggregate_1.WorkoutToDoSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkoutToDoSumAggregate_1.WorkoutToDoSumAggregate)
], AggregateWorkoutToDo.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoMinAggregate_1.WorkoutToDoMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkoutToDoMinAggregate_1.WorkoutToDoMinAggregate)
], AggregateWorkoutToDo.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoMaxAggregate_1.WorkoutToDoMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkoutToDoMaxAggregate_1.WorkoutToDoMaxAggregate)
], AggregateWorkoutToDo.prototype, "_max", void 0);
AggregateWorkoutToDo = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateWorkoutToDo", {
        isAbstract: true
    })
], AggregateWorkoutToDo);
exports.AggregateWorkoutToDo = AggregateWorkoutToDo;
