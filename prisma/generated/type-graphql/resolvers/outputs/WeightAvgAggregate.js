"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let WeightAvgAggregate = class WeightAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], WeightAvgAggregate.prototype, "weight", void 0);
WeightAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("WeightAvgAggregate", {
        isAbstract: true
    })
], WeightAvgAggregate);
exports.WeightAvgAggregate = WeightAvgAggregate;
