"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalWorkoutCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let GlobalWorkoutCountAggregate = class GlobalWorkoutCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], GlobalWorkoutCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], GlobalWorkoutCountAggregate.prototype, "indications", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], GlobalWorkoutCountAggregate.prototype, "goal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], GlobalWorkoutCountAggregate.prototype, "goalvalue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], GlobalWorkoutCountAggregate.prototype, "coachId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], GlobalWorkoutCountAggregate.prototype, "_all", void 0);
GlobalWorkoutCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("GlobalWorkoutCountAggregate", {
        isAbstract: true
    })
], GlobalWorkoutCountAggregate);
exports.GlobalWorkoutCountAggregate = GlobalWorkoutCountAggregate;
