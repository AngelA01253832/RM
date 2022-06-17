"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateGlobalWorkoutResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateGlobalWorkoutArgs_1 = require("./args/AggregateGlobalWorkoutArgs");
const GlobalWorkout_1 = require("../../../models/GlobalWorkout");
const AggregateGlobalWorkout_1 = require("../../outputs/AggregateGlobalWorkout");
const helpers_1 = require("../../../helpers");
let AggregateGlobalWorkoutResolver = class AggregateGlobalWorkoutResolver {
    async aggregateGlobalWorkout(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).globalWorkout.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateGlobalWorkout_1.AggregateGlobalWorkout, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateGlobalWorkoutArgs_1.AggregateGlobalWorkoutArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateGlobalWorkoutResolver.prototype, "aggregateGlobalWorkout", null);
AggregateGlobalWorkoutResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => GlobalWorkout_1.GlobalWorkout)
], AggregateGlobalWorkoutResolver);
exports.AggregateGlobalWorkoutResolver = AggregateGlobalWorkoutResolver;
