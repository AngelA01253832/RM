"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutToDoAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let WorkoutToDoAvgAggregate = class WorkoutToDoAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], WorkoutToDoAvgAggregate.prototype, "goalvalue", void 0);
WorkoutToDoAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("WorkoutToDoAvgAggregate", {
        isAbstract: true
    })
], WorkoutToDoAvgAggregate);
exports.WorkoutToDoAvgAggregate = WorkoutToDoAvgAggregate;
