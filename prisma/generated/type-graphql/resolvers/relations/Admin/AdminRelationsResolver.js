"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Admin_1 = require("../../../models/Admin");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let AdminRelationsResolver = class AdminRelationsResolver {
    async user(admin, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).admin.findUnique({
            where: {
                id: admin.id,
            },
        }).user({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Admin_1.Admin, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminRelationsResolver.prototype, "user", null);
AdminRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Admin_1.Admin)
], AdminRelationsResolver);
exports.AdminRelationsResolver = AdminRelationsResolver;
