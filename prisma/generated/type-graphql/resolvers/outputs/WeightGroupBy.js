"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WeightAvgAggregate_1 = require("../outputs/WeightAvgAggregate");
const WeightCountAggregate_1 = require("../outputs/WeightCountAggregate");
const WeightMaxAggregate_1 = require("../outputs/WeightMaxAggregate");
const WeightMinAggregate_1 = require("../outputs/WeightMinAggregate");
const WeightSumAggregate_1 = require("../outputs/WeightSumAggregate");
let WeightGroupBy = class WeightGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], WeightGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], WeightGroupBy.prototype, "weight", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], WeightGroupBy.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], WeightGroupBy.prototype, "athleteId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightCountAggregate_1.WeightCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WeightCountAggregate_1.WeightCountAggregate)
], WeightGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightAvgAggregate_1.WeightAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WeightAvgAggregate_1.WeightAvgAggregate)
], WeightGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightSumAggregate_1.WeightSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WeightSumAggregate_1.WeightSumAggregate)
], WeightGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightMinAggregate_1.WeightMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WeightMinAggregate_1.WeightMinAggregate)
], WeightGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightMaxAggregate_1.WeightMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WeightMaxAggregate_1.WeightMaxAggregate)
], WeightGroupBy.prototype, "_max", void 0);
WeightGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("WeightGroupBy", {
        isAbstract: true
    })
], WeightGroupBy);
exports.WeightGroupBy = WeightGroupBy;
