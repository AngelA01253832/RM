"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoneWorkoutRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Athlete_1 = require("../../../models/Athlete");
const DoneWorkout_1 = require("../../../models/DoneWorkout");
const helpers_1 = require("../../../helpers");
let DoneWorkoutRelationsResolver = class DoneWorkoutRelationsResolver {
    async athlete(doneWorkout, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).doneWorkout.findUnique({
            where: {
                id: doneWorkout.id,
            },
        }).athlete({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Athlete_1.Athlete, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [DoneWorkout_1.DoneWorkout, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DoneWorkoutRelationsResolver.prototype, "athlete", null);
DoneWorkoutRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => DoneWorkout_1.DoneWorkout)
], DoneWorkoutRelationsResolver);
exports.DoneWorkoutRelationsResolver = DoneWorkoutRelationsResolver;
