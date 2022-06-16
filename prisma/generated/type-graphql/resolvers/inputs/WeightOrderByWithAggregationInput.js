"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WeightAvgOrderByAggregateInput_1 = require("../inputs/WeightAvgOrderByAggregateInput");
const WeightCountOrderByAggregateInput_1 = require("../inputs/WeightCountOrderByAggregateInput");
const WeightMaxOrderByAggregateInput_1 = require("../inputs/WeightMaxOrderByAggregateInput");
const WeightMinOrderByAggregateInput_1 = require("../inputs/WeightMinOrderByAggregateInput");
const WeightSumOrderByAggregateInput_1 = require("../inputs/WeightSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let WeightOrderByWithAggregationInput = class WeightOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WeightOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WeightOrderByWithAggregationInput.prototype, "weight", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WeightOrderByWithAggregationInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WeightOrderByWithAggregationInput.prototype, "athleteId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightCountOrderByAggregateInput_1.WeightCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WeightCountOrderByAggregateInput_1.WeightCountOrderByAggregateInput)
], WeightOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightAvgOrderByAggregateInput_1.WeightAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WeightAvgOrderByAggregateInput_1.WeightAvgOrderByAggregateInput)
], WeightOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightMaxOrderByAggregateInput_1.WeightMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WeightMaxOrderByAggregateInput_1.WeightMaxOrderByAggregateInput)
], WeightOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightMinOrderByAggregateInput_1.WeightMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WeightMinOrderByAggregateInput_1.WeightMinOrderByAggregateInput)
], WeightOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightSumOrderByAggregateInput_1.WeightSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WeightSumOrderByAggregateInput_1.WeightSumOrderByAggregateInput)
], WeightOrderByWithAggregationInput.prototype, "_sum", void 0);
WeightOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WeightOrderByWithAggregationInput", {
        isAbstract: true
    })
], WeightOrderByWithAggregationInput);
exports.WeightOrderByWithAggregationInput = WeightOrderByWithAggregationInput;
