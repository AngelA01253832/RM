"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutToDoMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let WorkoutToDoMaxOrderByAggregateInput = class WorkoutToDoMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoMaxOrderByAggregateInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoMaxOrderByAggregateInput.prototype, "indications", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoMaxOrderByAggregateInput.prototype, "goal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoMaxOrderByAggregateInput.prototype, "goalvalue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoMaxOrderByAggregateInput.prototype, "coachId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoMaxOrderByAggregateInput.prototype, "athleteId", void 0);
WorkoutToDoMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkoutToDoMaxOrderByAggregateInput", {
        isAbstract: true
    })
], WorkoutToDoMaxOrderByAggregateInput);
exports.WorkoutToDoMaxOrderByAggregateInput = WorkoutToDoMaxOrderByAggregateInput;
