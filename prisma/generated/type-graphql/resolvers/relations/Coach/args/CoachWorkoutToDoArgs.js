"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoachWorkoutToDoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkoutToDoOrderByWithRelationInput_1 = require("../../../inputs/WorkoutToDoOrderByWithRelationInput");
const WorkoutToDoWhereInput_1 = require("../../../inputs/WorkoutToDoWhereInput");
const WorkoutToDoWhereUniqueInput_1 = require("../../../inputs/WorkoutToDoWhereUniqueInput");
const WorkoutToDoScalarFieldEnum_1 = require("../../../../enums/WorkoutToDoScalarFieldEnum");
let CoachWorkoutToDoArgs = class CoachWorkoutToDoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoWhereInput_1.WorkoutToDoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkoutToDoWhereInput_1.WorkoutToDoWhereInput)
], CoachWorkoutToDoArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkoutToDoOrderByWithRelationInput_1.WorkoutToDoOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CoachWorkoutToDoArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoWhereUniqueInput_1.WorkoutToDoWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkoutToDoWhereUniqueInput_1.WorkoutToDoWhereUniqueInput)
], CoachWorkoutToDoArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CoachWorkoutToDoArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CoachWorkoutToDoArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkoutToDoScalarFieldEnum_1.WorkoutToDoScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CoachWorkoutToDoArgs.prototype, "distinct", void 0);
CoachWorkoutToDoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CoachWorkoutToDoArgs);
exports.CoachWorkoutToDoArgs = CoachWorkoutToDoArgs;
