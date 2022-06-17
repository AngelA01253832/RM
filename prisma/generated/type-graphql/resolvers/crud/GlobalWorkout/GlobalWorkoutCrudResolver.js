"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalWorkoutCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateGlobalWorkoutArgs_1 = require("./args/AggregateGlobalWorkoutArgs");
const CreateGlobalWorkoutArgs_1 = require("./args/CreateGlobalWorkoutArgs");
const CreateManyGlobalWorkoutArgs_1 = require("./args/CreateManyGlobalWorkoutArgs");
const DeleteGlobalWorkoutArgs_1 = require("./args/DeleteGlobalWorkoutArgs");
const DeleteManyGlobalWorkoutArgs_1 = require("./args/DeleteManyGlobalWorkoutArgs");
const FindFirstGlobalWorkoutArgs_1 = require("./args/FindFirstGlobalWorkoutArgs");
const FindManyGlobalWorkoutArgs_1 = require("./args/FindManyGlobalWorkoutArgs");
const FindUniqueGlobalWorkoutArgs_1 = require("./args/FindUniqueGlobalWorkoutArgs");
const GroupByGlobalWorkoutArgs_1 = require("./args/GroupByGlobalWorkoutArgs");
const UpdateGlobalWorkoutArgs_1 = require("./args/UpdateGlobalWorkoutArgs");
const UpdateManyGlobalWorkoutArgs_1 = require("./args/UpdateManyGlobalWorkoutArgs");
const UpsertGlobalWorkoutArgs_1 = require("./args/UpsertGlobalWorkoutArgs");
const helpers_1 = require("../../../helpers");
const GlobalWorkout_1 = require("../../../models/GlobalWorkout");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateGlobalWorkout_1 = require("../../outputs/AggregateGlobalWorkout");
const GlobalWorkoutGroupBy_1 = require("../../outputs/GlobalWorkoutGroupBy");
let GlobalWorkoutCrudResolver = class GlobalWorkoutCrudResolver {
    async globalWorkout(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).globalWorkout.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstGlobalWorkout(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).globalWorkout.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async globalWorkouts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).globalWorkout.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createGlobalWorkout(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).globalWorkout.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyGlobalWorkout(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).globalWorkout.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteGlobalWorkout(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).globalWorkout.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateGlobalWorkout(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).globalWorkout.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyGlobalWorkout(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).globalWorkout.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyGlobalWorkout(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).globalWorkout.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertGlobalWorkout(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).globalWorkout.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateGlobalWorkout(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).globalWorkout.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByGlobalWorkout(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).globalWorkout.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueGlobalWorkoutArgs_1.FindUniqueGlobalWorkoutArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GlobalWorkoutCrudResolver.prototype, "globalWorkout", null);
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
], GlobalWorkoutCrudResolver.prototype, "findFirstGlobalWorkout", null);
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
], GlobalWorkoutCrudResolver.prototype, "globalWorkouts", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => GlobalWorkout_1.GlobalWorkout, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateGlobalWorkoutArgs_1.CreateGlobalWorkoutArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GlobalWorkoutCrudResolver.prototype, "createGlobalWorkout", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyGlobalWorkoutArgs_1.CreateManyGlobalWorkoutArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GlobalWorkoutCrudResolver.prototype, "createManyGlobalWorkout", null);
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
], GlobalWorkoutCrudResolver.prototype, "deleteGlobalWorkout", null);
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
], GlobalWorkoutCrudResolver.prototype, "updateGlobalWorkout", null);
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
], GlobalWorkoutCrudResolver.prototype, "deleteManyGlobalWorkout", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyGlobalWorkoutArgs_1.UpdateManyGlobalWorkoutArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GlobalWorkoutCrudResolver.prototype, "updateManyGlobalWorkout", null);
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
], GlobalWorkoutCrudResolver.prototype, "upsertGlobalWorkout", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateGlobalWorkout_1.AggregateGlobalWorkout, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateGlobalWorkoutArgs_1.AggregateGlobalWorkoutArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GlobalWorkoutCrudResolver.prototype, "aggregateGlobalWorkout", null);
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
], GlobalWorkoutCrudResolver.prototype, "groupByGlobalWorkout", null);
GlobalWorkoutCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => GlobalWorkout_1.GlobalWorkout)
], GlobalWorkoutCrudResolver);
exports.GlobalWorkoutCrudResolver = GlobalWorkoutCrudResolver;
