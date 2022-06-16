"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyAthleteResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyAthleteArgs_1 = require("./args/FindManyAthleteArgs");
const Athlete_1 = require("../../../models/Athlete");
const helpers_1 = require("../../../helpers");
let FindManyAthleteResolver = class FindManyAthleteResolver {
    async athletes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).athlete.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Athlete_1.Athlete], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyAthleteArgs_1.FindManyAthleteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyAthleteResolver.prototype, "athletes", null);
FindManyAthleteResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Athlete_1.Athlete)
], FindManyAthleteResolver);
exports.FindManyAthleteResolver = FindManyAthleteResolver;
