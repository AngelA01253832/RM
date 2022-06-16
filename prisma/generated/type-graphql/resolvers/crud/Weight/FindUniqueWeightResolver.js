"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueWeightResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueWeightArgs_1 = require("./args/FindUniqueWeightArgs");
const Weight_1 = require("../../../models/Weight");
const helpers_1 = require("../../../helpers");
let FindUniqueWeightResolver = class FindUniqueWeightResolver {
    async weight(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).weight.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Weight_1.Weight, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueWeightArgs_1.FindUniqueWeightArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueWeightResolver.prototype, "weight", null);
FindUniqueWeightResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Weight_1.Weight)
], FindUniqueWeightResolver);
exports.FindUniqueWeightResolver = FindUniqueWeightResolver;
