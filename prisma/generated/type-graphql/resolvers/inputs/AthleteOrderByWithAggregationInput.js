"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AthleteOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AthleteAvgOrderByAggregateInput_1 = require("../inputs/AthleteAvgOrderByAggregateInput");
const AthleteCountOrderByAggregateInput_1 = require("../inputs/AthleteCountOrderByAggregateInput");
const AthleteMaxOrderByAggregateInput_1 = require("../inputs/AthleteMaxOrderByAggregateInput");
const AthleteMinOrderByAggregateInput_1 = require("../inputs/AthleteMinOrderByAggregateInput");
const AthleteSumOrderByAggregateInput_1 = require("../inputs/AthleteSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AthleteOrderByWithAggregationInput = class AthleteOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AthleteOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AthleteOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AthleteOrderByWithAggregationInput.prototype, "lastname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AthleteOrderByWithAggregationInput.prototype, "schoolId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AthleteOrderByWithAggregationInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AthleteOrderByWithAggregationInput.prototype, "height", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AthleteOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteCountOrderByAggregateInput_1.AthleteCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteCountOrderByAggregateInput_1.AthleteCountOrderByAggregateInput)
], AthleteOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteAvgOrderByAggregateInput_1.AthleteAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteAvgOrderByAggregateInput_1.AthleteAvgOrderByAggregateInput)
], AthleteOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteMaxOrderByAggregateInput_1.AthleteMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteMaxOrderByAggregateInput_1.AthleteMaxOrderByAggregateInput)
], AthleteOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteMinOrderByAggregateInput_1.AthleteMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteMinOrderByAggregateInput_1.AthleteMinOrderByAggregateInput)
], AthleteOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteSumOrderByAggregateInput_1.AthleteSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteSumOrderByAggregateInput_1.AthleteSumOrderByAggregateInput)
], AthleteOrderByWithAggregationInput.prototype, "_sum", void 0);
AthleteOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AthleteOrderByWithAggregationInput", {
        isAbstract: true
    })
], AthleteOrderByWithAggregationInput);
exports.AthleteOrderByWithAggregationInput = AthleteOrderByWithAggregationInput;
