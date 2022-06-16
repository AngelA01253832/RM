"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let WeightOrderByRelationAggregateInput = class WeightOrderByRelationAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WeightOrderByRelationAggregateInput.prototype, "_count", void 0);
WeightOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WeightOrderByRelationAggregateInput", {
        isAbstract: true
    })
], WeightOrderByRelationAggregateInput);
exports.WeightOrderByRelationAggregateInput = WeightOrderByRelationAggregateInput;
