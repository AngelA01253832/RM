"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGlobalWorkoutResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateGlobalWorkoutArgs_1 = require("./args/UpdateGlobalWorkoutArgs");
const GlobalWorkout_1 = require("../../../models/GlobalWorkout");
const helpers_1 = require("../../../helpers");
let UpdateGlobalWorkoutResolver = class UpdateGlobalWorkoutResolver {
    async updateGlobalWorkout(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).globalWorkout.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => GlobalWorkout_1.GlobalWorkout, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateGlobalWorkoutArgs_1.UpdateGlobalWorkoutArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateGlobalWorkoutResolver.prototype, "updateGlobalWorkout", null);
UpdateGlobalWorkoutResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => GlobalWorkout_1.GlobalWorkout)
], UpdateGlobalWorkoutResolver);
exports.UpdateGlobalWorkoutResolver = UpdateGlobalWorkoutResolver;
