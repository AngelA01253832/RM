"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWeightResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateWeightArgs_1 = require("./args/CreateWeightArgs");
const Weight_1 = require("../../../models/Weight");
const helpers_1 = require("../../../helpers");
let CreateWeightResolver = class CreateWeightResolver {
    async createWeight(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).weight.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Weight_1.Weight, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateWeightArgs_1.CreateWeightArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateWeightResolver.prototype, "createWeight", null);
CreateWeightResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Weight_1.Weight)
], CreateWeightResolver);
exports.CreateWeightResolver = CreateWeightResolver;
