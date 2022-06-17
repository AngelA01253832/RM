"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalWorkoutOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CoachOrderByWithRelationInput_1 = require("../inputs/CoachOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let GlobalWorkoutOrderByWithRelationInput = class GlobalWorkoutOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachOrderByWithRelationInput_1.CoachOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachOrderByWithRelationInput_1.CoachOrderByWithRelationInput)
], GlobalWorkoutOrderByWithRelationInput.prototype, "coach", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutOrderByWithRelationInput.prototype, "indications", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutOrderByWithRelationInput.prototype, "goal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutOrderByWithRelationInput.prototype, "goalvalue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutOrderByWithRelationInput.prototype, "coachId", void 0);
GlobalWorkoutOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("GlobalWorkoutOrderByWithRelationInput", {
        isAbstract: true
    })
], GlobalWorkoutOrderByWithRelationInput);
exports.GlobalWorkoutOrderByWithRelationInput = GlobalWorkoutOrderByWithRelationInput;
