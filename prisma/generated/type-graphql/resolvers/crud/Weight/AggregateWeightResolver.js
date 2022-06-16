"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateWeightResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateWeightArgs_1 = require("./args/AggregateWeightArgs");
const Weight_1 = require("../../../models/Weight");
const AggregateWeight_1 = require("../../outputs/AggregateWeight");
const helpers_1 = require("../../../helpers");
let AggregateWeightResolver = class AggregateWeightResolver {
    async aggregateWeight(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).weight.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateWeight_1.AggregateWeight, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateWeightArgs_1.AggregateWeightArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateWeightResolver.prototype, "aggregateWeight", null);
AggregateWeightResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Weight_1.Weight)
], AggregateWeightResolver);
exports.AggregateWeightResolver = AggregateWeightResolver;
