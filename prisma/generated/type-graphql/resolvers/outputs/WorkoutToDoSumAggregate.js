"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutToDoSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let WorkoutToDoSumAggregate = class WorkoutToDoSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], WorkoutToDoSumAggregate.prototype, "goalvalue", void 0);
WorkoutToDoSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("WorkoutToDoSumAggregate", {
        isAbstract: true
    })
], WorkoutToDoSumAggregate);
exports.WorkoutToDoSumAggregate = WorkoutToDoSumAggregate;
