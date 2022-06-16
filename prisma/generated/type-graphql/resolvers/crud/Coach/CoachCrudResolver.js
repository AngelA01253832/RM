"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoachCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateCoachArgs_1 = require("./args/AggregateCoachArgs");
const CreateCoachArgs_1 = require("./args/CreateCoachArgs");
const CreateManyCoachArgs_1 = require("./args/CreateManyCoachArgs");
const DeleteCoachArgs_1 = require("./args/DeleteCoachArgs");
const DeleteManyCoachArgs_1 = require("./args/DeleteManyCoachArgs");
const FindFirstCoachArgs_1 = require("./args/FindFirstCoachArgs");
const FindManyCoachArgs_1 = require("./args/FindManyCoachArgs");
const FindUniqueCoachArgs_1 = require("./args/FindUniqueCoachArgs");
const GroupByCoachArgs_1 = require("./args/GroupByCoachArgs");
const UpdateCoachArgs_1 = require("./args/UpdateCoachArgs");
const UpdateManyCoachArgs_1 = require("./args/UpdateManyCoachArgs");
const UpsertCoachArgs_1 = require("./args/UpsertCoachArgs");
const helpers_1 = require("../../../helpers");
const Coach_1 = require("../../../models/Coach");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCoach_1 = require("../../outputs/AggregateCoach");
const CoachGroupBy_1 = require("../../outputs/CoachGroupBy");
let CoachCrudResolver = class CoachCrudResolver {
    async coach(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).coach.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCoach(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).coach.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async coaches(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).coach.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createCoach(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).coach.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyCoach(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).coach.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteCoach(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).coach.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateCoach(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).coach.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyCoach(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).coach.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyCoach(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).coach.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertCoach(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).coach.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateCoach(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).coach.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByCoach(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).coach.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Coach_1.Coach, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCoachArgs_1.FindUniqueCoachArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CoachCrudResolver.prototype, "coach", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Coach_1.Coach, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCoachArgs_1.FindFirstCoachArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CoachCrudResolver.prototype, "findFirstCoach", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Coach_1.Coach], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCoachArgs_1.FindManyCoachArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CoachCrudResolver.prototype, "coaches", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Coach_1.Coach, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateCoachArgs_1.CreateCoachArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CoachCrudResolver.prototype, "createCoach", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCoachArgs_1.CreateManyCoachArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CoachCrudResolver.prototype, "createManyCoach", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Coach_1.Coach, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteCoachArgs_1.DeleteCoachArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CoachCrudResolver.prototype, "deleteCoach", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Coach_1.Coach, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateCoachArgs_1.UpdateCoachArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CoachCrudResolver.prototype, "updateCoach", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCoachArgs_1.DeleteManyCoachArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CoachCrudResolver.prototype, "deleteManyCoach", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCoachArgs_1.UpdateManyCoachArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CoachCrudResolver.prototype, "updateManyCoach", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Coach_1.Coach, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertCoachArgs_1.UpsertCoachArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CoachCrudResolver.prototype, "upsertCoach", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCoach_1.AggregateCoach, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCoachArgs_1.AggregateCoachArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CoachCrudResolver.prototype, "aggregateCoach", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CoachGroupBy_1.CoachGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCoachArgs_1.GroupByCoachArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CoachCrudResolver.prototype, "groupByCoach", null);
CoachCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Coach_1.Coach)
], CoachCrudResolver);
exports.CoachCrudResolver = CoachCrudResolver;
