"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAthleteResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateAthleteArgs_1 = require("./args/AggregateAthleteArgs");
const Athlete_1 = require("../../../models/Athlete");
const AggregateAthlete_1 = require("../../outputs/AggregateAthlete");
const helpers_1 = require("../../../helpers");
let AggregateAthleteResolver = class AggregateAthleteResolver {
    async aggregateAthlete(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).athlete.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateAthlete_1.AggregateAthlete, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateAthleteArgs_1.AggregateAthleteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateAthleteResolver.prototype, "aggregateAthlete", null);
AggregateAthleteResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Athlete_1.Athlete)
], AggregateAthleteResolver);
exports.AggregateAthleteResolver = AggregateAthleteResolver;
