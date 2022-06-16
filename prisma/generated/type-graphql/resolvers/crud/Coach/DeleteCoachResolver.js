"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCoachResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteCoachArgs_1 = require("./args/DeleteCoachArgs");
const Coach_1 = require("../../../models/Coach");
const helpers_1 = require("../../../helpers");
let DeleteCoachResolver = class DeleteCoachResolver {
    async deleteCoach(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).coach.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], DeleteCoachResolver.prototype, "deleteCoach", null);
DeleteCoachResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Coach_1.Coach)
], DeleteCoachResolver);
exports.DeleteCoachResolver = DeleteCoachResolver;
