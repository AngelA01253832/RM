"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoneWorkoutGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DoneWorkoutAvgAggregate_1 = require("../outputs/DoneWorkoutAvgAggregate");
const DoneWorkoutCountAggregate_1 = require("../outputs/DoneWorkoutCountAggregate");
const DoneWorkoutMaxAggregate_1 = require("../outputs/DoneWorkoutMaxAggregate");
const DoneWorkoutMinAggregate_1 = require("../outputs/DoneWorkoutMinAggregate");
const DoneWorkoutSumAggregate_1 = require("../outputs/DoneWorkoutSumAggregate");
let DoneWorkoutGroupBy = class DoneWorkoutGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DoneWorkoutGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], DoneWorkoutGroupBy.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], DoneWorkoutGroupBy.prototype, "calories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], DoneWorkoutGroupBy.prototype, "time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], DoneWorkoutGroupBy.prototype, "distance", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], DoneWorkoutGroupBy.prototype, "intensity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DoneWorkoutGroupBy.prototype, "athleteId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutCountAggregate_1.DoneWorkoutCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DoneWorkoutCountAggregate_1.DoneWorkoutCountAggregate)
], DoneWorkoutGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutAvgAggregate_1.DoneWorkoutAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DoneWorkoutAvgAggregate_1.DoneWorkoutAvgAggregate)
], DoneWorkoutGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutSumAggregate_1.DoneWorkoutSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DoneWorkoutSumAggregate_1.DoneWorkoutSumAggregate)
], DoneWorkoutGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutMinAggregate_1.DoneWorkoutMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DoneWorkoutMinAggregate_1.DoneWorkoutMinAggregate)
], DoneWorkoutGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutMaxAggregate_1.DoneWorkoutMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DoneWorkoutMaxAggregate_1.DoneWorkoutMaxAggregate)
], DoneWorkoutGroupBy.prototype, "_max", void 0);
DoneWorkoutGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("DoneWorkoutGroupBy", {
        isAbstract: true
    })
], DoneWorkoutGroupBy);
exports.DoneWorkoutGroupBy = DoneWorkoutGroupBy;
