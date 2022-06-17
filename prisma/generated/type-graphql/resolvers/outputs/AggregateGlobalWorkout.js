"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateGlobalWorkout = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GlobalWorkoutCountAggregate_1 = require("../outputs/GlobalWorkoutCountAggregate");
const GlobalWorkoutMaxAggregate_1 = require("../outputs/GlobalWorkoutMaxAggregate");
const GlobalWorkoutMinAggregate_1 = require("../outputs/GlobalWorkoutMinAggregate");
let AggregateGlobalWorkout = class AggregateGlobalWorkout {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlobalWorkoutCountAggregate_1.GlobalWorkoutCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlobalWorkoutCountAggregate_1.GlobalWorkoutCountAggregate)
], AggregateGlobalWorkout.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlobalWorkoutMinAggregate_1.GlobalWorkoutMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlobalWorkoutMinAggregate_1.GlobalWorkoutMinAggregate)
], AggregateGlobalWorkout.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlobalWorkoutMaxAggregate_1.GlobalWorkoutMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlobalWorkoutMaxAggregate_1.GlobalWorkoutMaxAggregate)
], AggregateGlobalWorkout.prototype, "_max", void 0);
AggregateGlobalWorkout = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateGlobalWorkout", {
        isAbstract: true
    })
], AggregateGlobalWorkout);
exports.AggregateGlobalWorkout = AggregateGlobalWorkout;
