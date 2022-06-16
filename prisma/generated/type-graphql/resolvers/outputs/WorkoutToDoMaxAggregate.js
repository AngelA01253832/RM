"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutToDoMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_Goal_1 = require("../../enums/Enum_Goal");
let WorkoutToDoMaxAggregate = class WorkoutToDoMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], WorkoutToDoMaxAggregate.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Goal_1.Enum_Goal, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoMaxAggregate.prototype, "goal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoMaxAggregate.prototype, "coachId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoMaxAggregate.prototype, "athleteId", void 0);
WorkoutToDoMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("WorkoutToDoMaxAggregate", {
        isAbstract: true
    })
], WorkoutToDoMaxAggregate);
exports.WorkoutToDoMaxAggregate = WorkoutToDoMaxAggregate;
