"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCoachResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateCoachArgs_1 = require("./args/UpdateCoachArgs");
const Coach_1 = require("../../../models/Coach");
const helpers_1 = require("../../../helpers");
let UpdateCoachResolver = class UpdateCoachResolver {
    async updateCoach(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).coach.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateCoachArgs_1.UpdateCoachArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateCoachResolver.prototype, "updateCoach", null);
UpdateCoachResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Coach_1.Coach)
], UpdateCoachResolver);
exports.UpdateCoachResolver = UpdateCoachResolver;
