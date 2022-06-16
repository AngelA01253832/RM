"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoneWorkoutOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AthleteOrderByWithRelationInput_1 = require("../inputs/AthleteOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let DoneWorkoutOrderByWithRelationInput = class DoneWorkoutOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DoneWorkoutOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteOrderByWithRelationInput_1.AthleteOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteOrderByWithRelationInput_1.AthleteOrderByWithRelationInput)
], DoneWorkoutOrderByWithRelationInput.prototype, "athlete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DoneWorkoutOrderByWithRelationInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DoneWorkoutOrderByWithRelationInput.prototype, "calories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DoneWorkoutOrderByWithRelationInput.prototype, "time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DoneWorkoutOrderByWithRelationInput.prototype, "distance", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DoneWorkoutOrderByWithRelationInput.prototype, "intensity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DoneWorkoutOrderByWithRelationInput.prototype, "athleteId", void 0);
DoneWorkoutOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DoneWorkoutOrderByWithRelationInput", {
        isAbstract: true
    })
], DoneWorkoutOrderByWithRelationInput);
exports.DoneWorkoutOrderByWithRelationInput = DoneWorkoutOrderByWithRelationInput;
