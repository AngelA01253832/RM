"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AthleteRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Athlete_1 = require("../../../models/Athlete");
const DoneWorkout_1 = require("../../../models/DoneWorkout");
const User_1 = require("../../../models/User");
const Weight_1 = require("../../../models/Weight");
const WorkoutToDo_1 = require("../../../models/WorkoutToDo");
const AthleteDoneWorkoutsArgs_1 = require("./args/AthleteDoneWorkoutsArgs");
const AthleteWeightsArgs_1 = require("./args/AthleteWeightsArgs");
const AthleteWorkoutstToDoArgs_1 = require("./args/AthleteWorkoutstToDoArgs");
const helpers_1 = require("../../../helpers");
let AthleteRelationsResolver = class AthleteRelationsResolver {
    async user(athlete, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).athlete.findUnique({
            where: {
                id: athlete.id,
            },
        }).user({});
    }
    async Weights(athlete, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).athlete.findUnique({
            where: {
                id: athlete.id,
            },
        }).Weights(args);
    }
    async DoneWorkouts(athlete, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).athlete.findUnique({
            where: {
                id: athlete.id,
            },
        }).DoneWorkouts(args);
    }
    async WorkoutstToDo(athlete, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).athlete.findUnique({
            where: {
                id: athlete.id,
            },
        }).WorkoutstToDo(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Athlete_1.Athlete, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AthleteRelationsResolver.prototype, "user", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Weight_1.Weight], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Athlete_1.Athlete, Object, AthleteWeightsArgs_1.AthleteWeightsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AthleteRelationsResolver.prototype, "Weights", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [DoneWorkout_1.DoneWorkout], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Athlete_1.Athlete, Object, AthleteDoneWorkoutsArgs_1.AthleteDoneWorkoutsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AthleteRelationsResolver.prototype, "DoneWorkouts", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [WorkoutToDo_1.WorkoutToDo], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Athlete_1.Athlete, Object, AthleteWorkoutstToDoArgs_1.AthleteWorkoutstToDoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AthleteRelationsResolver.prototype, "WorkoutstToDo", null);
AthleteRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Athlete_1.Athlete)
], AthleteRelationsResolver);
exports.AthleteRelationsResolver = AthleteRelationsResolver;
