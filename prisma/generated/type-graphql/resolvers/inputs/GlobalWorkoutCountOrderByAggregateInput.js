"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalWorkoutCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let GlobalWorkoutCountOrderByAggregateInput = class GlobalWorkoutCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutCountOrderByAggregateInput.prototype, "indications", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutCountOrderByAggregateInput.prototype, "goal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutCountOrderByAggregateInput.prototype, "goalvalue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutCountOrderByAggregateInput.prototype, "coachId", void 0);
GlobalWorkoutCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("GlobalWorkoutCountOrderByAggregateInput", {
        isAbstract: true
    })
], GlobalWorkoutCountOrderByAggregateInput);
exports.GlobalWorkoutCountOrderByAggregateInput = GlobalWorkoutCountOrderByAggregateInput;
