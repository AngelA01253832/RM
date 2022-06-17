"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertGlobalWorkoutResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertGlobalWorkoutArgs_1 = require("./args/UpsertGlobalWorkoutArgs");
const GlobalWorkout_1 = require("../../../models/GlobalWorkout");
const helpers_1 = require("../../../helpers");
let UpsertGlobalWorkoutResolver = class UpsertGlobalWorkoutResolver {
    async upsertGlobalWorkout(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).globalWorkout.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => GlobalWorkout_1.GlobalWorkout, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertGlobalWorkoutArgs_1.UpsertGlobalWorkoutArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertGlobalWorkoutResolver.prototype, "upsertGlobalWorkout", null);
UpsertGlobalWorkoutResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => GlobalWorkout_1.GlobalWorkout)
], UpsertGlobalWorkoutResolver);
exports.UpsertGlobalWorkoutResolver = UpsertGlobalWorkoutResolver;
