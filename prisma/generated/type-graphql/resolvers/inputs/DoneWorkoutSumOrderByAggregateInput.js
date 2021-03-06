"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoneWorkoutSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let DoneWorkoutSumOrderByAggregateInput = class DoneWorkoutSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DoneWorkoutSumOrderByAggregateInput.prototype, "calories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DoneWorkoutSumOrderByAggregateInput.prototype, "time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DoneWorkoutSumOrderByAggregateInput.prototype, "distance", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DoneWorkoutSumOrderByAggregateInput.prototype, "intensity", void 0);
DoneWorkoutSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DoneWorkoutSumOrderByAggregateInput", {
        isAbstract: true
    })
], DoneWorkoutSumOrderByAggregateInput);
exports.DoneWorkoutSumOrderByAggregateInput = DoneWorkoutSumOrderByAggregateInput;
