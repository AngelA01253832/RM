"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoachGlobalWorkoutArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GlobalWorkoutOrderByWithRelationInput_1 = require("../../../inputs/GlobalWorkoutOrderByWithRelationInput");
const GlobalWorkoutWhereInput_1 = require("../../../inputs/GlobalWorkoutWhereInput");
const GlobalWorkoutWhereUniqueInput_1 = require("../../../inputs/GlobalWorkoutWhereUniqueInput");
const GlobalWorkoutScalarFieldEnum_1 = require("../../../../enums/GlobalWorkoutScalarFieldEnum");
let CoachGlobalWorkoutArgs = class CoachGlobalWorkoutArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlobalWorkoutWhereInput_1.GlobalWorkoutWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlobalWorkoutWhereInput_1.GlobalWorkoutWhereInput)
], CoachGlobalWorkoutArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GlobalWorkoutOrderByWithRelationInput_1.GlobalWorkoutOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CoachGlobalWorkoutArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlobalWorkoutWhereUniqueInput_1.GlobalWorkoutWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlobalWorkoutWhereUniqueInput_1.GlobalWorkoutWhereUniqueInput)
], CoachGlobalWorkoutArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CoachGlobalWorkoutArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CoachGlobalWorkoutArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GlobalWorkoutScalarFieldEnum_1.GlobalWorkoutScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CoachGlobalWorkoutArgs.prototype, "distinct", void 0);
CoachGlobalWorkoutArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CoachGlobalWorkoutArgs);
exports.CoachGlobalWorkoutArgs = CoachGlobalWorkoutArgs;
