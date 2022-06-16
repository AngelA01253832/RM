"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateWeightArgs_1 = require("./args/AggregateWeightArgs");
const CreateManyWeightArgs_1 = require("./args/CreateManyWeightArgs");
const CreateWeightArgs_1 = require("./args/CreateWeightArgs");
const DeleteManyWeightArgs_1 = require("./args/DeleteManyWeightArgs");
const DeleteWeightArgs_1 = require("./args/DeleteWeightArgs");
const FindFirstWeightArgs_1 = require("./args/FindFirstWeightArgs");
const FindManyWeightArgs_1 = require("./args/FindManyWeightArgs");
const FindUniqueWeightArgs_1 = require("./args/FindUniqueWeightArgs");
const GroupByWeightArgs_1 = require("./args/GroupByWeightArgs");
const UpdateManyWeightArgs_1 = require("./args/UpdateManyWeightArgs");
const UpdateWeightArgs_1 = require("./args/UpdateWeightArgs");
const UpsertWeightArgs_1 = require("./args/UpsertWeightArgs");
const helpers_1 = require("../../../helpers");
const Weight_1 = require("../../../models/Weight");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateWeight_1 = require("../../outputs/AggregateWeight");
const WeightGroupBy_1 = require("../../outputs/WeightGroupBy");
let WeightCrudResolver = class WeightCrudResolver {
    async weight(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).weight.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstWeight(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).weight.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async weights(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).weight.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createWeight(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).weight.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyWeight(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).weight.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteWeight(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).weight.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateWeight(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).weight.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyWeight(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).weight.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyWeight(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).weight.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertWeight(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).weight.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateWeight(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).weight.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByWeight(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).weight.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Weight_1.Weight, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueWeightArgs_1.FindUniqueWeightArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WeightCrudResolver.prototype, "weight", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Weight_1.Weight, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstWeightArgs_1.FindFirstWeightArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WeightCrudResolver.prototype, "findFirstWeight", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Weight_1.Weight], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyWeightArgs_1.FindManyWeightArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WeightCrudResolver.prototype, "weights", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Weight_1.Weight, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateWeightArgs_1.CreateWeightArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WeightCrudResolver.prototype, "createWeight", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyWeightArgs_1.CreateManyWeightArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WeightCrudResolver.prototype, "createManyWeight", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Weight_1.Weight, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteWeightArgs_1.DeleteWeightArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WeightCrudResolver.prototype, "deleteWeight", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Weight_1.Weight, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateWeightArgs_1.UpdateWeightArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WeightCrudResolver.prototype, "updateWeight", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyWeightArgs_1.DeleteManyWeightArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WeightCrudResolver.prototype, "deleteManyWeight", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyWeightArgs_1.UpdateManyWeightArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WeightCrudResolver.prototype, "updateManyWeight", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Weight_1.Weight, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertWeightArgs_1.UpsertWeightArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WeightCrudResolver.prototype, "upsertWeight", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateWeight_1.AggregateWeight, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateWeightArgs_1.AggregateWeightArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WeightCrudResolver.prototype, "aggregateWeight", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [WeightGroupBy_1.WeightGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByWeightArgs_1.GroupByWeightArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WeightCrudResolver.prototype, "groupByWeight", null);
WeightCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Weight_1.Weight)
], WeightCrudResolver);
exports.WeightCrudResolver = WeightCrudResolver;
