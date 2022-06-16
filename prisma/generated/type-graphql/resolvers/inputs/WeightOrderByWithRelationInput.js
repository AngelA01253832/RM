"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AthleteOrderByWithRelationInput_1 = require("../inputs/AthleteOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let WeightOrderByWithRelationInput = class WeightOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WeightOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WeightOrderByWithRelationInput.prototype, "weight", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteOrderByWithRelationInput_1.AthleteOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteOrderByWithRelationInput_1.AthleteOrderByWithRelationInput)
], WeightOrderByWithRelationInput.prototype, "athlete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WeightOrderByWithRelationInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WeightOrderByWithRelationInput.prototype, "athleteId", void 0);
WeightOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WeightOrderByWithRelationInput", {
        isAbstract: true
    })
], WeightOrderByWithRelationInput);
exports.WeightOrderByWithRelationInput = WeightOrderByWithRelationInput;
