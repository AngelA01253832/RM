"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstGlobalWorkoutResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstGlobalWorkoutArgs_1 = require("./args/FindFirstGlobalWorkoutArgs");
const GlobalWorkout_1 = require("../../../models/GlobalWorkout");
const helpers_1 = require("../../../helpers");
let FindFirstGlobalWorkoutResolver = class FindFirstGlobalWorkoutResolver {
    async findFirstGlobalWorkout(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).globalWorkout.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => GlobalWorkout_1.GlobalWorkout, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstGlobalWorkoutArgs_1.FindFirstGlobalWorkoutArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstGlobalWorkoutResolver.prototype, "findFirstGlobalWorkout", null);
FindFirstGlobalWorkoutResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => GlobalWorkout_1.GlobalWorkout)
], FindFirstGlobalWorkoutResolver);
exports.FindFirstGlobalWorkoutResolver = FindFirstGlobalWorkoutResolver;
