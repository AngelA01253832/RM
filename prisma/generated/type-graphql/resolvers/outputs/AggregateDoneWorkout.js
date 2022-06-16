"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateDoneWorkout = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DoneWorkoutAvgAggregate_1 = require("../outputs/DoneWorkoutAvgAggregate");
const DoneWorkoutCountAggregate_1 = require("../outputs/DoneWorkoutCountAggregate");
const DoneWorkoutMaxAggregate_1 = require("../outputs/DoneWorkoutMaxAggregate");
const DoneWorkoutMinAggregate_1 = require("../outputs/DoneWorkoutMinAggregate");
const DoneWorkoutSumAggregate_1 = require("../outputs/DoneWorkoutSumAggregate");
let AggregateDoneWorkout = class AggregateDoneWorkout {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutCountAggregate_1.DoneWorkoutCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DoneWorkoutCountAggregate_1.DoneWorkoutCountAggregate)
], AggregateDoneWorkout.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutAvgAggregate_1.DoneWorkoutAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DoneWorkoutAvgAggregate_1.DoneWorkoutAvgAggregate)
], AggregateDoneWorkout.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutSumAggregate_1.DoneWorkoutSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DoneWorkoutSumAggregate_1.DoneWorkoutSumAggregate)
], AggregateDoneWorkout.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutMinAggregate_1.DoneWorkoutMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DoneWorkoutMinAggregate_1.DoneWorkoutMinAggregate)
], AggregateDoneWorkout.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutMaxAggregate_1.DoneWorkoutMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DoneWorkoutMaxAggregate_1.DoneWorkoutMaxAggregate)
], AggregateDoneWorkout.prototype, "_max", void 0);
AggregateDoneWorkout = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateDoneWorkout", {
        isAbstract: true
    })
], AggregateDoneWorkout);
exports.AggregateDoneWorkout = AggregateDoneWorkout;
