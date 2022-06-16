"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCoachResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateCoachArgs_1 = require("./args/AggregateCoachArgs");
const Coach_1 = require("../../../models/Coach");
const AggregateCoach_1 = require("../../outputs/AggregateCoach");
const helpers_1 = require("../../../helpers");
let AggregateCoachResolver = class AggregateCoachResolver {
    async aggregateCoach(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).coach.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCoach_1.AggregateCoach, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCoachArgs_1.AggregateCoachArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateCoachResolver.prototype, "aggregateCoach", null);
AggregateCoachResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Coach_1.Coach)
], AggregateCoachResolver);
exports.AggregateCoachResolver = AggregateCoachResolver;
