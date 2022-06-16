"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutToDoCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let WorkoutToDoCountOrderByAggregateInput = class WorkoutToDoCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoCountOrderByAggregateInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoCountOrderByAggregateInput.prototype, "goal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoCountOrderByAggregateInput.prototype, "coachId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoCountOrderByAggregateInput.prototype, "athleteId", void 0);
WorkoutToDoCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkoutToDoCountOrderByAggregateInput", {
        isAbstract: true
    })
], WorkoutToDoCountOrderByAggregateInput);
exports.WorkoutToDoCountOrderByAggregateInput = WorkoutToDoCountOrderByAggregateInput;
