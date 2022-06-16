"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let WeightCountOrderByAggregateInput = class WeightCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WeightCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WeightCountOrderByAggregateInput.prototype, "weight", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WeightCountOrderByAggregateInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WeightCountOrderByAggregateInput.prototype, "athleteId", void 0);
WeightCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WeightCountOrderByAggregateInput", {
        isAbstract: true
    })
], WeightCountOrderByAggregateInput);
exports.WeightCountOrderByAggregateInput = WeightCountOrderByAggregateInput;
