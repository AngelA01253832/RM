"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let WeightSumAggregate = class WeightSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], WeightSumAggregate.prototype, "weight", void 0);
WeightSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("WeightSumAggregate", {
        isAbstract: true
    })
], WeightSumAggregate);
exports.WeightSumAggregate = WeightSumAggregate;
