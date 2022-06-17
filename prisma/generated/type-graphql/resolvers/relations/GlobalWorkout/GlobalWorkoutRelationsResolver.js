"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalWorkoutRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Coach_1 = require("../../../models/Coach");
const GlobalWorkout_1 = require("../../../models/GlobalWorkout");
const helpers_1 = require("../../../helpers");
let GlobalWorkoutRelationsResolver = class GlobalWorkoutRelationsResolver {
    async coach(globalWorkout, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).globalWorkout.findUnique({
            where: {
                id: globalWorkout.id,
            },
        }).coach({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Coach_1.Coach, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [GlobalWorkout_1.GlobalWorkout, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GlobalWorkoutRelationsResolver.prototype, "coach", null);
GlobalWorkoutRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => GlobalWorkout_1.GlobalWorkout)
], GlobalWorkoutRelationsResolver);
exports.GlobalWorkoutRelationsResolver = GlobalWorkoutRelationsResolver;
