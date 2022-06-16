"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let WeightAvgOrderByAggregateInput = class WeightAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WeightAvgOrderByAggregateInput.prototype, "weight", void 0);
WeightAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WeightAvgOrderByAggregateInput", {
        isAbstract: true
    })
], WeightAvgOrderByAggregateInput);
exports.WeightAvgOrderByAggregateInput = WeightAvgOrderByAggregateInput;
