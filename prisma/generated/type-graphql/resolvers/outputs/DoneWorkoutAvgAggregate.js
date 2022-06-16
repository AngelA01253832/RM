"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoneWorkoutAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DoneWorkoutAvgAggregate = class DoneWorkoutAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DoneWorkoutAvgAggregate.prototype, "calories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DoneWorkoutAvgAggregate.prototype, "time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DoneWorkoutAvgAggregate.prototype, "distance", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DoneWorkoutAvgAggregate.prototype, "intensity", void 0);
DoneWorkoutAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("DoneWorkoutAvgAggregate", {
        isAbstract: true
    })
], DoneWorkoutAvgAggregate);
exports.DoneWorkoutAvgAggregate = DoneWorkoutAvgAggregate;
