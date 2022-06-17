"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutToDoOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkoutToDoAvgOrderByAggregateInput_1 = require("../inputs/WorkoutToDoAvgOrderByAggregateInput");
const WorkoutToDoCountOrderByAggregateInput_1 = require("../inputs/WorkoutToDoCountOrderByAggregateInput");
const WorkoutToDoMaxOrderByAggregateInput_1 = require("../inputs/WorkoutToDoMaxOrderByAggregateInput");
const WorkoutToDoMinOrderByAggregateInput_1 = require("../inputs/WorkoutToDoMinOrderByAggregateInput");
const WorkoutToDoSumOrderByAggregateInput_1 = require("../inputs/WorkoutToDoSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let WorkoutToDoOrderByWithAggregationInput = class WorkoutToDoOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoOrderByWithAggregationInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoOrderByWithAggregationInput.prototype, "indications", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoOrderByWithAggregationInput.prototype, "goal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoOrderByWithAggregationInput.prototype, "goalvalue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoOrderByWithAggregationInput.prototype, "coachId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoOrderByWithAggregationInput.prototype, "athleteId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoCountOrderByAggregateInput_1.WorkoutToDoCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkoutToDoCountOrderByAggregateInput_1.WorkoutToDoCountOrderByAggregateInput)
], WorkoutToDoOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoAvgOrderByAggregateInput_1.WorkoutToDoAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkoutToDoAvgOrderByAggregateInput_1.WorkoutToDoAvgOrderByAggregateInput)
], WorkoutToDoOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoMaxOrderByAggregateInput_1.WorkoutToDoMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkoutToDoMaxOrderByAggregateInput_1.WorkoutToDoMaxOrderByAggregateInput)
], WorkoutToDoOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoMinOrderByAggregateInput_1.WorkoutToDoMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkoutToDoMinOrderByAggregateInput_1.WorkoutToDoMinOrderByAggregateInput)
], WorkoutToDoOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoSumOrderByAggregateInput_1.WorkoutToDoSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkoutToDoSumOrderByAggregateInput_1.WorkoutToDoSumOrderByAggregateInput)
], WorkoutToDoOrderByWithAggregationInput.prototype, "_sum", void 0);
WorkoutToDoOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkoutToDoOrderByWithAggregationInput", {
        isAbstract: true
    })
], WorkoutToDoOrderByWithAggregationInput);
exports.WorkoutToDoOrderByWithAggregationInput = WorkoutToDoOrderByWithAggregationInput;
