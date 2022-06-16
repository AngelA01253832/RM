"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateWeight = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WeightAvgAggregate_1 = require("../outputs/WeightAvgAggregate");
const WeightCountAggregate_1 = require("../outputs/WeightCountAggregate");
const WeightMaxAggregate_1 = require("../outputs/WeightMaxAggregate");
const WeightMinAggregate_1 = require("../outputs/WeightMinAggregate");
const WeightSumAggregate_1 = require("../outputs/WeightSumAggregate");
let AggregateWeight = class AggregateWeight {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightCountAggregate_1.WeightCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WeightCountAggregate_1.WeightCountAggregate)
], AggregateWeight.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightAvgAggregate_1.WeightAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WeightAvgAggregate_1.WeightAvgAggregate)
], AggregateWeight.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightSumAggregate_1.WeightSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WeightSumAggregate_1.WeightSumAggregate)
], AggregateWeight.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightMinAggregate_1.WeightMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WeightMinAggregate_1.WeightMinAggregate)
], AggregateWeight.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightMaxAggregate_1.WeightMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WeightMaxAggregate_1.WeightMaxAggregate)
], AggregateWeight.prototype, "_max", void 0);
AggregateWeight = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateWeight", {
        isAbstract: true
    })
], AggregateWeight);
exports.AggregateWeight = AggregateWeight;
