"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let WeightMinOrderByAggregateInput = class WeightMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WeightMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WeightMinOrderByAggregateInput.prototype, "weight", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WeightMinOrderByAggregateInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WeightMinOrderByAggregateInput.prototype, "athleteId", void 0);
WeightMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WeightMinOrderByAggregateInput", {
        isAbstract: true
    })
], WeightMinOrderByAggregateInput);
exports.WeightMinOrderByAggregateInput = WeightMinOrderByAggregateInput;
