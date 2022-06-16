"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertAdminResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertAdminArgs_1 = require("./args/UpsertAdminArgs");
const Admin_1 = require("../../../models/Admin");
const helpers_1 = require("../../../helpers");
let UpsertAdminResolver = class UpsertAdminResolver {
    async upsertAdmin(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).admin.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], UpsertAdminResolver.prototype, "upsertAdmin", null);
UpsertAdminResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Admin_1.Admin)
], UpsertAdminResolver);
exports.UpsertAdminResolver = UpsertAdminResolver;
