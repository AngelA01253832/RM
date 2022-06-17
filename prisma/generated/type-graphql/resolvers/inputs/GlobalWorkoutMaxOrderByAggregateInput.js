"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalWorkoutMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let GlobalWorkoutMaxOrderByAggregateInput = class GlobalWorkoutMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutMaxOrderByAggregateInput.prototype, "indications", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutMaxOrderByAggregateInput.prototype, "goal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutMaxOrderByAggregateInput.prototype, "goalvalue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutMaxOrderByAggregateInput.prototype, "coachId", void 0);
GlobalWorkoutMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("GlobalWorkoutMaxOrderByAggregateInput", {
        isAbstract: true
    })
], GlobalWorkoutMaxOrderByAggregateInput);
exports.GlobalWorkoutMaxOrderByAggregateInput = GlobalWorkoutMaxOrderByAggregateInput;
