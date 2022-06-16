"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoneWorkoutCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateDoneWorkoutArgs_1 = require("./args/AggregateDoneWorkoutArgs");
const CreateDoneWorkoutArgs_1 = require("./args/CreateDoneWorkoutArgs");
const CreateManyDoneWorkoutArgs_1 = require("./args/CreateManyDoneWorkoutArgs");
const DeleteDoneWorkoutArgs_1 = require("./args/DeleteDoneWorkoutArgs");
const DeleteManyDoneWorkoutArgs_1 = require("./args/DeleteManyDoneWorkoutArgs");
const FindFirstDoneWorkoutArgs_1 = require("./args/FindFirstDoneWorkoutArgs");
const FindManyDoneWorkoutArgs_1 = require("./args/FindManyDoneWorkoutArgs");
const FindUniqueDoneWorkoutArgs_1 = require("./args/FindUniqueDoneWorkoutArgs");
const GroupByDoneWorkoutArgs_1 = require("./args/GroupByDoneWorkoutArgs");
const UpdateDoneWorkoutArgs_1 = require("./args/UpdateDoneWorkoutArgs");
const UpdateManyDoneWorkoutArgs_1 = require("./args/UpdateManyDoneWorkoutArgs");
const UpsertDoneWorkoutArgs_1 = require("./args/UpsertDoneWorkoutArgs");
const helpers_1 = require("../../../helpers");
const DoneWorkout_1 = require("../../../models/DoneWorkout");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateDoneWorkout_1 = require("../../outputs/AggregateDoneWorkout");
const DoneWorkoutGroupBy_1 = require("../../outputs/DoneWorkoutGroupBy");
let DoneWorkoutCrudResolver = class DoneWorkoutCrudResolver {
    async doneWorkout(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).doneWorkout.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstDoneWorkout(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).doneWorkout.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async doneWorkouts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).doneWorkout.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createDoneWorkout(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).doneWorkout.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyDoneWorkout(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).doneWorkout.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteDoneWorkout(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).doneWorkout.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateDoneWorkout(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).doneWorkout.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyDoneWorkout(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).doneWorkout.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyDoneWorkout(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).doneWorkout.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertDoneWorkout(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).doneWorkout.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateDoneWorkout(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).doneWorkout.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByDoneWorkout(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).doneWorkout.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => DoneWorkout_1.DoneWorkout, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueDoneWorkoutArgs_1.FindUniqueDoneWorkoutArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DoneWorkoutCrudResolver.prototype, "doneWorkout", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => DoneWorkout_1.DoneWorkout, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstDoneWorkoutArgs_1.FindFirstDoneWorkoutArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DoneWorkoutCrudResolver.prototype, "findFirstDoneWorkout", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [DoneWorkout_1.DoneWorkout], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyDoneWorkoutArgs_1.FindManyDoneWorkoutArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DoneWorkoutCrudResolver.prototype, "doneWorkouts", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => DoneWorkout_1.DoneWorkout, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateDoneWorkoutArgs_1.CreateDoneWorkoutArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DoneWorkoutCrudResolver.prototype, "createDoneWorkout", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyDoneWorkoutArgs_1.CreateManyDoneWorkoutArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DoneWorkoutCrudResolver.prototype, "createManyDoneWorkout", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => DoneWorkout_1.DoneWorkout, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteDoneWorkoutArgs_1.DeleteDoneWorkoutArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DoneWorkoutCrudResolver.prototype, "deleteDoneWorkout", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => DoneWorkout_1.DoneWorkout, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateDoneWorkoutArgs_1.UpdateDoneWorkoutArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DoneWorkoutCrudResolver.prototype, "updateDoneWorkout", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyDoneWorkoutArgs_1.DeleteManyDoneWorkoutArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DoneWorkoutCrudResolver.prototype, "deleteManyDoneWorkout", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyDoneWorkoutArgs_1.UpdateManyDoneWorkoutArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DoneWorkoutCrudResolver.prototype, "updateManyDoneWorkout", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => DoneWorkout_1.DoneWorkout, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertDoneWorkoutArgs_1.UpsertDoneWorkoutArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DoneWorkoutCrudResolver.prototype, "upsertDoneWorkout", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateDoneWorkout_1.AggregateDoneWorkout, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateDoneWorkoutArgs_1.AggregateDoneWorkoutArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DoneWorkoutCrudResolver.prototype, "aggregateDoneWorkout", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [DoneWorkoutGroupBy_1.DoneWorkoutGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByDoneWorkoutArgs_1.GroupByDoneWorkoutArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DoneWorkoutCrudResolver.prototype, "groupByDoneWorkout", null);
DoneWorkoutCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => DoneWorkout_1.DoneWorkout)
], DoneWorkoutCrudResolver);
exports.DoneWorkoutCrudResolver = DoneWorkoutCrudResolver;
