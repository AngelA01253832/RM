"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalWorkoutOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let GlobalWorkoutOrderByRelationAggregateInput = class GlobalWorkoutOrderByRelationAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutOrderByRelationAggregateInput.prototype, "_count", void 0);
GlobalWorkoutOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("GlobalWorkoutOrderByRelationAggregateInput", {
        isAbstract: true
    })
], GlobalWorkoutOrderByRelationAggregateInput);
exports.GlobalWorkoutOrderByRelationAggregateInput = GlobalWorkoutOrderByRelationAggregateInput;
