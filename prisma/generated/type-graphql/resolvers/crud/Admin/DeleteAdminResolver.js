"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAdminResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteAdminArgs_1 = require("./args/DeleteAdminArgs");
const Admin_1 = require("../../../models/Admin");
const helpers_1 = require("../../../helpers");
let DeleteAdminResolver = class DeleteAdminResolver {
    async deleteAdmin(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).admin.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], DeleteAdminResolver.prototype, "deleteAdmin", null);
DeleteAdminResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Admin_1.Admin)
], DeleteAdminResolver);
exports.DeleteAdminResolver = DeleteAdminResolver;
