"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AthleteCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateAthleteArgs_1 = require("./args/AggregateAthleteArgs");
const CreateAthleteArgs_1 = require("./args/CreateAthleteArgs");
const CreateManyAthleteArgs_1 = require("./args/CreateManyAthleteArgs");
const DeleteAthleteArgs_1 = require("./args/DeleteAthleteArgs");
const DeleteManyAthleteArgs_1 = require("./args/DeleteManyAthleteArgs");
const FindFirstAthleteArgs_1 = require("./args/FindFirstAthleteArgs");
const FindManyAthleteArgs_1 = require("./args/FindManyAthleteArgs");
const FindUniqueAthleteArgs_1 = require("./args/FindUniqueAthleteArgs");
const GroupByAthleteArgs_1 = require("./args/GroupByAthleteArgs");
const UpdateAthleteArgs_1 = require("./args/UpdateAthleteArgs");
const UpdateManyAthleteArgs_1 = require("./args/UpdateManyAthleteArgs");
const UpsertAthleteArgs_1 = require("./args/UpsertAthleteArgs");
const helpers_1 = require("../../../helpers");
const Athlete_1 = require("../../../models/Athlete");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateAthlete_1 = require("../../outputs/AggregateAthlete");
const AthleteGroupBy_1 = require("../../outputs/AthleteGroupBy");
let AthleteCrudResolver = class AthleteCrudResolver {
    async athlete(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).athlete.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstAthlete(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).athlete.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async athletes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).athlete.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createAthlete(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).athlete.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyAthlete(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).athlete.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteAthlete(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).athlete.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateAthlete(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).athlete.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyAthlete(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).athlete.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyAthlete(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).athlete.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertAthlete(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).athlete.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateAthlete(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).athlete.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByAthlete(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).athlete.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Athlete_1.Athlete, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueAthleteArgs_1.FindUniqueAthleteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AthleteCrudResolver.prototype, "athlete", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Athlete_1.Athlete, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstAthleteArgs_1.FindFirstAthleteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AthleteCrudResolver.prototype, "findFirstAthlete", null);
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
], AthleteCrudResolver.prototype, "athletes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Athlete_1.Athlete, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateAthleteArgs_1.CreateAthleteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AthleteCrudResolver.prototype, "createAthlete", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAthleteArgs_1.CreateManyAthleteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AthleteCrudResolver.prototype, "createManyAthlete", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Athlete_1.Athlete, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteAthleteArgs_1.DeleteAthleteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AthleteCrudResolver.prototype, "deleteAthlete", null);
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
], AthleteCrudResolver.prototype, "updateAthlete", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyAthleteArgs_1.DeleteManyAthleteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AthleteCrudResolver.prototype, "deleteManyAthlete", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyAthleteArgs_1.UpdateManyAthleteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AthleteCrudResolver.prototype, "updateManyAthlete", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Athlete_1.Athlete, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertAthleteArgs_1.UpsertAthleteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AthleteCrudResolver.prototype, "upsertAthlete", null);
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
], AthleteCrudResolver.prototype, "aggregateAthlete", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [AthleteGroupBy_1.AthleteGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByAthleteArgs_1.GroupByAthleteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AthleteCrudResolver.prototype, "groupByAthlete", null);
AthleteCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Athlete_1.Athlete)
], AthleteCrudResolver);
exports.AthleteCrudResolver = AthleteCrudResolver;
