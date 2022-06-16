"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoneWorkoutSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DoneWorkoutSumAggregate = class DoneWorkoutSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DoneWorkoutSumAggregate.prototype, "calories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DoneWorkoutSumAggregate.prototype, "time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DoneWorkoutSumAggregate.prototype, "distance", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DoneWorkoutSumAggregate.prototype, "intensity", void 0);
DoneWorkoutSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("DoneWorkoutSumAggregate", {
        isAbstract: true
    })
], DoneWorkoutSumAggregate);
exports.DoneWorkoutSumAggregate = DoneWorkoutSumAggregate;
