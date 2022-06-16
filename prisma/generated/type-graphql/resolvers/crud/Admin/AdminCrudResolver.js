"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateAdminArgs_1 = require("./args/AggregateAdminArgs");
const CreateAdminArgs_1 = require("./args/CreateAdminArgs");
const CreateManyAdminArgs_1 = require("./args/CreateManyAdminArgs");
const DeleteAdminArgs_1 = require("./args/DeleteAdminArgs");
const DeleteManyAdminArgs_1 = require("./args/DeleteManyAdminArgs");
const FindFirstAdminArgs_1 = require("./args/FindFirstAdminArgs");
const FindManyAdminArgs_1 = require("./args/FindManyAdminArgs");
const FindUniqueAdminArgs_1 = require("./args/FindUniqueAdminArgs");
const GroupByAdminArgs_1 = require("./args/GroupByAdminArgs");
const UpdateAdminArgs_1 = require("./args/UpdateAdminArgs");
const UpdateManyAdminArgs_1 = require("./args/UpdateManyAdminArgs");
const UpsertAdminArgs_1 = require("./args/UpsertAdminArgs");
const helpers_1 = require("../../../helpers");
const Admin_1 = require("../../../models/Admin");
const AdminGroupBy_1 = require("../../outputs/AdminGroupBy");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateAdmin_1 = require("../../outputs/AggregateAdmin");
let AdminCrudResolver = class AdminCrudResolver {
    async admin(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).admin.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstAdmin(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).admin.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async admins(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).admin.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createAdmin(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).admin.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyAdmin(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).admin.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteAdmin(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).admin.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateAdmin(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).admin.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyAdmin(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).admin.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyAdmin(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).admin.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertAdmin(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).admin.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateAdmin(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).admin.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByAdmin(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).admin.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Admin_1.Admin, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueAdminArgs_1.FindUniqueAdminArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminCrudResolver.prototype, "admin", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Admin_1.Admin, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstAdminArgs_1.FindFirstAdminArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminCrudResolver.prototype, "findFirstAdmin", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Admin_1.Admin], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyAdminArgs_1.FindManyAdminArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminCrudResolver.prototype, "admins", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Admin_1.Admin, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateAdminArgs_1.CreateAdminArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminCrudResolver.prototype, "createAdmin", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAdminArgs_1.CreateManyAdminArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminCrudResolver.prototype, "createManyAdmin", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Admin_1.Admin, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteAdminArgs_1.DeleteAdminArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminCrudResolver.prototype, "deleteAdmin", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Admin_1.Admin, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateAdminArgs_1.UpdateAdminArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminCrudResolver.prototype, "updateAdmin", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyAdminArgs_1.DeleteManyAdminArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminCrudResolver.prototype, "deleteManyAdmin", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyAdminArgs_1.UpdateManyAdminArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminCrudResolver.prototype, "updateManyAdmin", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Admin_1.Admin, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertAdminArgs_1.UpsertAdminArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminCrudResolver.prototype, "upsertAdmin", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateAdmin_1.AggregateAdmin, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateAdminArgs_1.AggregateAdminArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminCrudResolver.prototype, "aggregateAdmin", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [AdminGroupBy_1.AdminGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByAdminArgs_1.GroupByAdminArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminCrudResolver.prototype, "groupByAdmin", null);
AdminCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Admin_1.Admin)
], AdminCrudResolver);
exports.AdminCrudResolver = AdminCrudResolver;
