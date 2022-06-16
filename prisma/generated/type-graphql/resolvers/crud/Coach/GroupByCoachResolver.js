"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCoachResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByCoachArgs_1 = require("./args/GroupByCoachArgs");
const Coach_1 = require("../../../models/Coach");
const CoachGroupBy_1 = require("../../outputs/CoachGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByCoachResolver = class GroupByCoachResolver {
    async groupByCoach(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).coach.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CoachGroupBy_1.CoachGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCoachArgs_1.GroupByCoachArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByCoachResolver.prototype, "groupByCoach", null);
GroupByCoachResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Coach_1.Coach)
], GroupByCoachResolver);
exports.GroupByCoachResolver = GroupByCoachResolver;
