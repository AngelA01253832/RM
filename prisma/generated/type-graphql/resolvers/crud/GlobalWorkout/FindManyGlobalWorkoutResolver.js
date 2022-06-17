"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyGlobalWorkoutResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyGlobalWorkoutArgs_1 = require("./args/FindManyGlobalWorkoutArgs");
const GlobalWorkout_1 = require("../../../models/GlobalWorkout");
const helpers_1 = require("../../../helpers");
let FindManyGlobalWorkoutResolver = class FindManyGlobalWorkoutResolver {
    async globalWorkouts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).globalWorkout.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [GlobalWorkout_1.GlobalWorkout], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyGlobalWorkoutArgs_1.FindManyGlobalWorkoutArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyGlobalWorkoutResolver.prototype, "globalWorkouts", null);
FindManyGlobalWorkoutResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => GlobalWorkout_1.GlobalWorkout)
], FindManyGlobalWorkoutResolver);
exports.FindManyGlobalWorkoutResolver = FindManyGlobalWorkoutResolver;
