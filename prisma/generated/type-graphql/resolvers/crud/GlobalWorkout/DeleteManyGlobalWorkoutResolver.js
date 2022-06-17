"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyGlobalWorkoutResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteManyGlobalWorkoutArgs_1 = require("./args/DeleteManyGlobalWorkoutArgs");
const GlobalWorkout_1 = require("../../../models/GlobalWorkout");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyGlobalWorkoutResolver = class DeleteManyGlobalWorkoutResolver {
    async deleteManyGlobalWorkout(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).globalWorkout.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyGlobalWorkoutArgs_1.DeleteManyGlobalWorkoutArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyGlobalWorkoutResolver.prototype, "deleteManyGlobalWorkout", null);
DeleteManyGlobalWorkoutResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => GlobalWorkout_1.GlobalWorkout)
], DeleteManyGlobalWorkoutResolver);
exports.DeleteManyGlobalWorkoutResolver = DeleteManyGlobalWorkoutResolver;
