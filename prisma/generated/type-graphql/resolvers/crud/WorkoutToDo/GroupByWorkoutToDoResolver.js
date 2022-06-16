"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByWorkoutToDoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByWorkoutToDoArgs_1 = require("./args/GroupByWorkoutToDoArgs");
const WorkoutToDo_1 = require("../../../models/WorkoutToDo");
const WorkoutToDoGroupBy_1 = require("../../outputs/WorkoutToDoGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByWorkoutToDoResolver = class GroupByWorkoutToDoResolver {
    async groupByWorkoutToDo(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).workoutToDo.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [WorkoutToDoGroupBy_1.WorkoutToDoGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByWorkoutToDoArgs_1.GroupByWorkoutToDoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByWorkoutToDoResolver.prototype, "groupByWorkoutToDo", null);
GroupByWorkoutToDoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => WorkoutToDo_1.WorkoutToDo)
], GroupByWorkoutToDoResolver);
exports.GroupByWorkoutToDoResolver = GroupByWorkoutToDoResolver;
