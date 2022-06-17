"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutToDoCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let WorkoutToDoCountAggregate = class WorkoutToDoCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], WorkoutToDoCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], WorkoutToDoCountAggregate.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], WorkoutToDoCountAggregate.prototype, "indications", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], WorkoutToDoCountAggregate.prototype, "goal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], WorkoutToDoCountAggregate.prototype, "goalvalue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], WorkoutToDoCountAggregate.prototype, "coachId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], WorkoutToDoCountAggregate.prototype, "athleteId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], WorkoutToDoCountAggregate.prototype, "_all", void 0);
WorkoutToDoCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("WorkoutToDoCountAggregate", {
        isAbstract: true
    })
], WorkoutToDoCountAggregate);
exports.WorkoutToDoCountAggregate = WorkoutToDoCountAggregate;
