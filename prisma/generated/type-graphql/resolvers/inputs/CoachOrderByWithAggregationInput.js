"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoachOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CoachCountOrderByAggregateInput_1 = require("../inputs/CoachCountOrderByAggregateInput");
const CoachMaxOrderByAggregateInput_1 = require("../inputs/CoachMaxOrderByAggregateInput");
const CoachMinOrderByAggregateInput_1 = require("../inputs/CoachMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CoachOrderByWithAggregationInput = class CoachOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CoachOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CoachOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CoachOrderByWithAggregationInput.prototype, "lastname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CoachOrderByWithAggregationInput.prototype, "schoolId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CoachOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CoachOrderByWithAggregationInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CoachOrderByWithAggregationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CoachOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachCountOrderByAggregateInput_1.CoachCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachCountOrderByAggregateInput_1.CoachCountOrderByAggregateInput)
], CoachOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachMaxOrderByAggregateInput_1.CoachMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachMaxOrderByAggregateInput_1.CoachMaxOrderByAggregateInput)
], CoachOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachMinOrderByAggregateInput_1.CoachMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachMinOrderByAggregateInput_1.CoachMinOrderByAggregateInput)
], CoachOrderByWithAggregationInput.prototype, "_min", void 0);
CoachOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CoachOrderByWithAggregationInput", {
        isAbstract: true
    })
], CoachOrderByWithAggregationInput);
exports.CoachOrderByWithAggregationInput = CoachOrderByWithAggregationInput;
