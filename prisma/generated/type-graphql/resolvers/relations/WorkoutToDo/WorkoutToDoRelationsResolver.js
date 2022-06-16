"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutToDoRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Athlete_1 = require("../../../models/Athlete");
const Coach_1 = require("../../../models/Coach");
const WorkoutToDo_1 = require("../../../models/WorkoutToDo");
const helpers_1 = require("../../../helpers");
let WorkoutToDoRelationsResolver = class WorkoutToDoRelationsResolver {
    async coach(workoutToDo, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).workoutToDo.findUnique({
            where: {
                id: workoutToDo.id,
            },
        }).coach({});
    }
    async athlete(workoutToDo, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).workoutToDo.findUnique({
            where: {
                id: workoutToDo.id,
            },
        }).athlete({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Coach_1.Coach, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [WorkoutToDo_1.WorkoutToDo, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkoutToDoRelationsResolver.prototype, "coach", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Athlete_1.Athlete, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [WorkoutToDo_1.WorkoutToDo, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkoutToDoRelationsResolver.prototype, "athlete", null);
WorkoutToDoRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => WorkoutToDo_1.WorkoutToDo)
], WorkoutToDoRelationsResolver);
exports.WorkoutToDoRelationsResolver = WorkoutToDoRelationsResolver;
