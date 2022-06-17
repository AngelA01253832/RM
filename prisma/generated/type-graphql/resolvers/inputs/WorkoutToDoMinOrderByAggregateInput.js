"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutToDoMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let WorkoutToDoMinOrderByAggregateInput = class WorkoutToDoMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoMinOrderByAggregateInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoMinOrderByAggregateInput.prototype, "indications", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoMinOrderByAggregateInput.prototype, "goal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoMinOrderByAggregateInput.prototype, "goalvalue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoMinOrderByAggregateInput.prototype, "coachId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoMinOrderByAggregateInput.prototype, "athleteId", void 0);
WorkoutToDoMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkoutToDoMinOrderByAggregateInput", {
        isAbstract: true
    })
], WorkoutToDoMinOrderByAggregateInput);
exports.WorkoutToDoMinOrderByAggregateInput = WorkoutToDoMinOrderByAggregateInput;
