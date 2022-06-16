"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutToDoGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkoutToDoCountAggregate_1 = require("../outputs/WorkoutToDoCountAggregate");
const WorkoutToDoMaxAggregate_1 = require("../outputs/WorkoutToDoMaxAggregate");
const WorkoutToDoMinAggregate_1 = require("../outputs/WorkoutToDoMinAggregate");
const Enum_Goal_1 = require("../../enums/Enum_Goal");
let WorkoutToDoGroupBy = class WorkoutToDoGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], WorkoutToDoGroupBy.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Goal_1.Enum_Goal, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoGroupBy.prototype, "goal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoGroupBy.prototype, "coachId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoGroupBy.prototype, "athleteId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoCountAggregate_1.WorkoutToDoCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkoutToDoCountAggregate_1.WorkoutToDoCountAggregate)
], WorkoutToDoGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoMinAggregate_1.WorkoutToDoMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkoutToDoMinAggregate_1.WorkoutToDoMinAggregate)
], WorkoutToDoGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoMaxAggregate_1.WorkoutToDoMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkoutToDoMaxAggregate_1.WorkoutToDoMaxAggregate)
], WorkoutToDoGroupBy.prototype, "_max", void 0);
WorkoutToDoGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("WorkoutToDoGroupBy", {
        isAbstract: true
    })
], WorkoutToDoGroupBy);
exports.WorkoutToDoGroupBy = WorkoutToDoGroupBy;
