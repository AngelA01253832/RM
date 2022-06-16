"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteWeightResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteWeightArgs_1 = require("./args/DeleteWeightArgs");
const Weight_1 = require("../../../models/Weight");
const helpers_1 = require("../../../helpers");
let DeleteWeightResolver = class DeleteWeightResolver {
    async deleteWeight(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).weight.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], DeleteWeightResolver.prototype, "deleteWeight", null);
DeleteWeightResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Weight_1.Weight)
], DeleteWeightResolver);
exports.DeleteWeightResolver = DeleteWeightResolver;
