"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AthleteAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let AthleteAvgOrderByAggregateInput = class AthleteAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AthleteAvgOrderByAggregateInput.prototype, "height", void 0);
AthleteAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AthleteAvgOrderByAggregateInput", {
        isAbstract: true
    })
], AthleteAvgOrderByAggregateInput);
exports.AthleteAvgOrderByAggregateInput = AthleteAvgOrderByAggregateInput;
