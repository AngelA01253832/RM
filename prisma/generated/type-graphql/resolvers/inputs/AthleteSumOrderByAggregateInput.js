"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AthleteSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let AthleteSumOrderByAggregateInput = class AthleteSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AthleteSumOrderByAggregateInput.prototype, "height", void 0);
AthleteSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AthleteSumOrderByAggregateInput", {
        isAbstract: true
    })
], AthleteSumOrderByAggregateInput);
exports.AthleteSumOrderByAggregateInput = AthleteSumOrderByAggregateInput;
