"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteGlobalWorkoutResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteGlobalWorkoutArgs_1 = require("./args/DeleteGlobalWorkoutArgs");
const GlobalWorkout_1 = require("../../../models/GlobalWorkout");
const helpers_1 = require("../../../helpers");
let DeleteGlobalWorkoutResolver = class DeleteGlobalWorkoutResolver {
    async deleteGlobalWorkout(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).globalWorkout.delete({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteGlobalWorkoutArgs_1.DeleteGlobalWorkoutArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteGlobalWorkoutResolver.prototype, "deleteGlobalWorkout", null);
DeleteGlobalWorkoutResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => GlobalWorkout_1.GlobalWorkout)
], DeleteGlobalWorkoutResolver);
exports.DeleteGlobalWorkoutResolver = DeleteGlobalWorkoutResolver;
