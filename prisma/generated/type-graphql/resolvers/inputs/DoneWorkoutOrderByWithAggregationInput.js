"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoneWorkoutOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DoneWorkoutAvgOrderByAggregateInput_1 = require("../inputs/DoneWorkoutAvgOrderByAggregateInput");
const DoneWorkoutCountOrderByAggregateInput_1 = require("../inputs/DoneWorkoutCountOrderByAggregateInput");
const DoneWorkoutMaxOrderByAggregateInput_1 = require("../inputs/DoneWorkoutMaxOrderByAggregateInput");
const DoneWorkoutMinOrderByAggregateInput_1 = require("../inputs/DoneWorkoutMinOrderByAggregateInput");
const DoneWorkoutSumOrderByAggregateInput_1 = require("../inputs/DoneWorkoutSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let DoneWorkoutOrderByWithAggregationInput = class DoneWorkoutOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DoneWorkoutOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DoneWorkoutOrderByWithAggregationInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DoneWorkoutOrderByWithAggregationInput.prototype, "calories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DoneWorkoutOrderByWithAggregationInput.prototype, "time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DoneWorkoutOrderByWithAggregationInput.prototype, "distance", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DoneWorkoutOrderByWithAggregationInput.prototype, "intensity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DoneWorkoutOrderByWithAggregationInput.prototype, "athleteId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutCountOrderByAggregateInput_1.DoneWorkoutCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DoneWorkoutCountOrderByAggregateInput_1.DoneWorkoutCountOrderByAggregateInput)
], DoneWorkoutOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutAvgOrderByAggregateInput_1.DoneWorkoutAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DoneWorkoutAvgOrderByAggregateInput_1.DoneWorkoutAvgOrderByAggregateInput)
], DoneWorkoutOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutMaxOrderByAggregateInput_1.DoneWorkoutMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DoneWorkoutMaxOrderByAggregateInput_1.DoneWorkoutMaxOrderByAggregateInput)
], DoneWorkoutOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutMinOrderByAggregateInput_1.DoneWorkoutMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DoneWorkoutMinOrderByAggregateInput_1.DoneWorkoutMinOrderByAggregateInput)
], DoneWorkoutOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutSumOrderByAggregateInput_1.DoneWorkoutSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DoneWorkoutSumOrderByAggregateInput_1.DoneWorkoutSumOrderByAggregateInput)
], DoneWorkoutOrderByWithAggregationInput.prototype, "_sum", void 0);
DoneWorkoutOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DoneWorkoutOrderByWithAggregationInput", {
        isAbstract: true
    })
], DoneWorkoutOrderByWithAggregationInput);
exports.DoneWorkoutOrderByWithAggregationInput = DoneWorkoutOrderByWithAggregationInput;
