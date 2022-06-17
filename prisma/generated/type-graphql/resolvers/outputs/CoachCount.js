"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoachCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CoachCount = class CoachCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CoachCount.prototype, "WorkoutToDo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CoachCount.prototype, "GlobalWorkout", void 0);
CoachCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CoachCount", {
        isAbstract: true
    })
], CoachCount);
exports.CoachCount = CoachCount;
