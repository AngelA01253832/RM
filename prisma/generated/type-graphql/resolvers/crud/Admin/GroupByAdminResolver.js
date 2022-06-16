"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByAdminResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByAdminArgs_1 = require("./args/GroupByAdminArgs");
const Admin_1 = require("../../../models/Admin");
const AdminGroupBy_1 = require("../../outputs/AdminGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByAdminResolver = class GroupByAdminResolver {
    async groupByAdmin(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).admin.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
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
], GroupByAdminResolver.prototype, "groupByAdmin", null);
GroupByAdminResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Admin_1.Admin)
], GroupByAdminResolver);
exports.GroupByAdminResolver = GroupByAdminResolver;
