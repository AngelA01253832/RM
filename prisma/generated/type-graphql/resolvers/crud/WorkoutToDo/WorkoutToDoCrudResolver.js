"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutToDoCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateWorkoutToDoArgs_1 = require("./args/AggregateWorkoutToDoArgs");
const CreateManyWorkoutToDoArgs_1 = require("./args/CreateManyWorkoutToDoArgs");
const CreateWorkoutToDoArgs_1 = require("./args/CreateWorkoutToDoArgs");
const DeleteManyWorkoutToDoArgs_1 = require("./args/DeleteManyWorkoutToDoArgs");
const DeleteWorkoutToDoArgs_1 = require("./args/DeleteWorkoutToDoArgs");
const FindFirstWorkoutToDoArgs_1 = require("./args/FindFirstWorkoutToDoArgs");
const FindManyWorkoutToDoArgs_1 = require("./args/FindManyWorkoutToDoArgs");
const FindUniqueWorkoutToDoArgs_1 = require("./args/FindUniqueWorkoutToDoArgs");
const GroupByWorkoutToDoArgs_1 = require("./args/GroupByWorkoutToDoArgs");
const UpdateManyWorkoutToDoArgs_1 = require("./args/UpdateManyWorkoutToDoArgs");
const UpdateWorkoutToDoArgs_1 = require("./args/UpdateWorkoutToDoArgs");
const UpsertWorkoutToDoArgs_1 = require("./args/UpsertWorkoutToDoArgs");
const helpers_1 = require("../../../helpers");
const WorkoutToDo_1 = require("../../../models/WorkoutToDo");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateWorkoutToDo_1 = require("../../outputs/AggregateWorkoutToDo");
const WorkoutToDoGroupBy_1 = require("../../outputs/WorkoutToDoGroupBy");
let WorkoutToDoCrudResolver = class WorkoutToDoCrudResolver {
    async workoutToDo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).workoutToDo.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstWorkoutToDo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).workoutToDo.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async workoutToDos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).workoutToDo.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createWorkoutToDo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).workoutToDo.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyWorkoutToDo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).workoutToDo.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteWorkoutToDo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).workoutToDo.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateWorkoutToDo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).workoutToDo.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyWorkoutToDo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).workoutToDo.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyWorkoutToDo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).workoutToDo.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertWorkoutToDo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).workoutToDo.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateWorkoutToDo(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).workoutToDo.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByWorkoutToDo(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).workoutToDo.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => WorkoutToDo_1.WorkoutToDo, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueWorkoutToDoArgs_1.FindUniqueWorkoutToDoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkoutToDoCrudResolver.prototype, "workoutToDo", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => WorkoutToDo_1.WorkoutToDo, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstWorkoutToDoArgs_1.FindFirstWorkoutToDoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkoutToDoCrudResolver.prototype, "findFirstWorkoutToDo", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [WorkoutToDo_1.WorkoutToDo], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyWorkoutToDoArgs_1.FindManyWorkoutToDoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkoutToDoCrudResolver.prototype, "workoutToDos", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => WorkoutToDo_1.WorkoutToDo, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateWorkoutToDoArgs_1.CreateWorkoutToDoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkoutToDoCrudResolver.prototype, "createWorkoutToDo", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyWorkoutToDoArgs_1.CreateManyWorkoutToDoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkoutToDoCrudResolver.prototype, "createManyWorkoutToDo", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => WorkoutToDo_1.WorkoutToDo, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteWorkoutToDoArgs_1.DeleteWorkoutToDoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkoutToDoCrudResolver.prototype, "deleteWorkoutToDo", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => WorkoutToDo_1.WorkoutToDo, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateWorkoutToDoArgs_1.UpdateWorkoutToDoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkoutToDoCrudResolver.prototype, "updateWorkoutToDo", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyWorkoutToDoArgs_1.DeleteManyWorkoutToDoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkoutToDoCrudResolver.prototype, "deleteManyWorkoutToDo", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyWorkoutToDoArgs_1.UpdateManyWorkoutToDoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkoutToDoCrudResolver.prototype, "updateManyWorkoutToDo", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => WorkoutToDo_1.WorkoutToDo, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertWorkoutToDoArgs_1.UpsertWorkoutToDoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkoutToDoCrudResolver.prototype, "upsertWorkoutToDo", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateWorkoutToDo_1.AggregateWorkoutToDo, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateWorkoutToDoArgs_1.AggregateWorkoutToDoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkoutToDoCrudResolver.prototype, "aggregateWorkoutToDo", null);
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
], WorkoutToDoCrudResolver.prototype, "groupByWorkoutToDo", null);
WorkoutToDoCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => WorkoutToDo_1.WorkoutToDo)
], WorkoutToDoCrudResolver);
exports.WorkoutToDoCrudResolver = WorkoutToDoCrudResolver;
