"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let WeightMaxOrderByAggregateInput = class WeightMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WeightMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WeightMaxOrderByAggregateInput.prototype, "weight", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WeightMaxOrderByAggregateInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WeightMaxOrderByAggregateInput.prototype, "athleteId", void 0);
WeightMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WeightMaxOrderByAggregateInput", {
        isAbstract: true
    })
], WeightMaxOrderByAggregateInput);
exports.WeightMaxOrderByAggregateInput = WeightMaxOrderByAggregateInput;
