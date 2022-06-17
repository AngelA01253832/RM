"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalWorkoutOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GlobalWorkoutCountOrderByAggregateInput_1 = require("../inputs/GlobalWorkoutCountOrderByAggregateInput");
const GlobalWorkoutMaxOrderByAggregateInput_1 = require("../inputs/GlobalWorkoutMaxOrderByAggregateInput");
const GlobalWorkoutMinOrderByAggregateInput_1 = require("../inputs/GlobalWorkoutMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let GlobalWorkoutOrderByWithAggregationInput = class GlobalWorkoutOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutOrderByWithAggregationInput.prototype, "indications", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutOrderByWithAggregationInput.prototype, "goal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutOrderByWithAggregationInput.prototype, "goalvalue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutOrderByWithAggregationInput.prototype, "coachId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlobalWorkoutCountOrderByAggregateInput_1.GlobalWorkoutCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlobalWorkoutCountOrderByAggregateInput_1.GlobalWorkoutCountOrderByAggregateInput)
], GlobalWorkoutOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlobalWorkoutMaxOrderByAggregateInput_1.GlobalWorkoutMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlobalWorkoutMaxOrderByAggregateInput_1.GlobalWorkoutMaxOrderByAggregateInput)
], GlobalWorkoutOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlobalWorkoutMinOrderByAggregateInput_1.GlobalWorkoutMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlobalWorkoutMinOrderByAggregateInput_1.GlobalWorkoutMinOrderByAggregateInput)
], GlobalWorkoutOrderByWithAggregationInput.prototype, "_min", void 0);
GlobalWorkoutOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("GlobalWorkoutOrderByWithAggregationInput", {
        isAbstract: true
    })
], GlobalWorkoutOrderByWithAggregationInput);
exports.GlobalWorkoutOrderByWithAggregationInput = GlobalWorkoutOrderByWithAggregationInput;
