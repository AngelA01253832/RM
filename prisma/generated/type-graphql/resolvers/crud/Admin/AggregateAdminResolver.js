"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAdminResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateAdminArgs_1 = require("./args/AggregateAdminArgs");
const Admin_1 = require("../../../models/Admin");
const AggregateAdmin_1 = require("../../outputs/AggregateAdmin");
const helpers_1 = require("../../../helpers");
let AggregateAdminResolver = class AggregateAdminResolver {
    async aggregateAdmin(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).admin.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
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
], AggregateAdminResolver.prototype, "aggregateAdmin", null);
AggregateAdminResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Admin_1.Admin)
], AggregateAdminResolver);
exports.AggregateAdminResolver = AggregateAdminResolver;
