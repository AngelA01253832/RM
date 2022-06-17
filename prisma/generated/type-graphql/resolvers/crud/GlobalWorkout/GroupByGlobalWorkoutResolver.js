"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByGlobalWorkoutResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByGlobalWorkoutArgs_1 = require("./args/GroupByGlobalWorkoutArgs");
const GlobalWorkout_1 = require("../../../models/GlobalWorkout");
const GlobalWorkoutGroupBy_1 = require("../../outputs/GlobalWorkoutGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByGlobalWorkoutResolver = class GroupByGlobalWorkoutResolver {
    async groupByGlobalWorkout(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).globalWorkout.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [GlobalWorkoutGroupBy_1.GlobalWorkoutGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByGlobalWorkoutArgs_1.GroupByGlobalWorkoutArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByGlobalWorkoutResolver.prototype, "groupByGlobalWorkout", null);
GroupByGlobalWorkoutResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => GlobalWorkout_1.GlobalWorkout)
], GroupByGlobalWorkoutResolver);
exports.GroupByGlobalWorkoutResolver = GroupByGlobalWorkoutResolver;
