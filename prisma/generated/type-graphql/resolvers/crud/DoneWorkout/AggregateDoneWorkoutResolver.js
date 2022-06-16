"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateDoneWorkoutResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateDoneWorkoutArgs_1 = require("./args/AggregateDoneWorkoutArgs");
const DoneWorkout_1 = require("../../../models/DoneWorkout");
const AggregateDoneWorkout_1 = require("../../outputs/AggregateDoneWorkout");
const helpers_1 = require("../../../helpers");
let AggregateDoneWorkoutResolver = class AggregateDoneWorkoutResolver {
    async aggregateDoneWorkout(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).doneWorkout.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateDoneWorkout_1.AggregateDoneWorkout, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateDoneWorkoutArgs_1.AggregateDoneWorkoutArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateDoneWorkoutResolver.prototype, "aggregateDoneWorkout", null);
AggregateDoneWorkoutResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => DoneWorkout_1.DoneWorkout)
], AggregateDoneWorkoutResolver);
exports.AggregateDoneWorkoutResolver = AggregateDoneWorkoutResolver;
