"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Athlete_1 = require("../../../models/Athlete");
const Weight_1 = require("../../../models/Weight");
const helpers_1 = require("../../../helpers");
let WeightRelationsResolver = class WeightRelationsResolver {
    async athlete(weight, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).weight.findUnique({
            where: {
                id: weight.id,
            },
        }).athlete({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Athlete_1.Athlete, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Weight_1.Weight, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WeightRelationsResolver.prototype, "athlete", null);
WeightRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Weight_1.Weight)
], WeightRelationsResolver);
exports.WeightRelationsResolver = WeightRelationsResolver;
