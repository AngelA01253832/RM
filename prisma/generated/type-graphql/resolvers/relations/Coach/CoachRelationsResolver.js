"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoachRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Coach_1 = require("../../../models/Coach");
const User_1 = require("../../../models/User");
const WorkoutToDo_1 = require("../../../models/WorkoutToDo");
const CoachWorkoutToDoArgs_1 = require("./args/CoachWorkoutToDoArgs");
const helpers_1 = require("../../../helpers");
let CoachRelationsResolver = class CoachRelationsResolver {
    async user(coach, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).coach.findUnique({
            where: {
                id: coach.id,
            },
        }).user({});
    }
    async WorkoutToDo(coach, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).coach.findUnique({
            where: {
                id: coach.id,
            },
        }).WorkoutToDo(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Coach_1.Coach, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CoachRelationsResolver.prototype, "user", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [WorkoutToDo_1.WorkoutToDo], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Coach_1.Coach, Object, CoachWorkoutToDoArgs_1.CoachWorkoutToDoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CoachRelationsResolver.prototype, "WorkoutToDo", null);
CoachRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Coach_1.Coach)
], CoachRelationsResolver);
exports.CoachRelationsResolver = CoachRelationsResolver;
