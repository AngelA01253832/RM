"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyAdminResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyAdminArgs_1 = require("./args/FindManyAdminArgs");
const Admin_1 = require("../../../models/Admin");
const helpers_1 = require("../../../helpers");
let FindManyAdminResolver = class FindManyAdminResolver {
    async admins(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).admin.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], FindManyAdminResolver.prototype, "admins", null);
FindManyAdminResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Admin_1.Admin)
], FindManyAdminResolver);
exports.FindManyAdminResolver = FindManyAdminResolver;
