"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAthleteResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateAthleteArgs_1 = require("./args/UpdateAthleteArgs");
const Athlete_1 = require("../../../models/Athlete");
const helpers_1 = require("../../../helpers");
let UpdateAthleteResolver = class UpdateAthleteResolver {
    async updateAthlete(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).athlete.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Athlete_1.Athlete, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateAthleteArgs_1.UpdateAthleteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateAthleteResolver.prototype, "updateAthlete", null);
UpdateAthleteResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Athlete_1.Athlete)
], UpdateAthleteResolver);
exports.UpdateAthleteResolver = UpdateAthleteResolver;
