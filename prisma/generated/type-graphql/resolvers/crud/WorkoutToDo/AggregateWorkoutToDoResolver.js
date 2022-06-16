"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateWorkoutToDoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateWorkoutToDoArgs_1 = require("./args/AggregateWorkoutToDoArgs");
const WorkoutToDo_1 = require("../../../models/WorkoutToDo");
const AggregateWorkoutToDo_1 = require("../../outputs/AggregateWorkoutToDo");
const helpers_1 = require("../../../helpers");
let AggregateWorkoutToDoResolver = class AggregateWorkoutToDoResolver {
    async aggregateWorkoutToDo(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).workoutToDo.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateWorkoutToDo_1.AggregateWorkoutToDo, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateWorkoutToDoArgs_1.AggregateWorkoutToDoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateWorkoutToDoResolver.prototype, "aggregateWorkoutToDo", null);
AggregateWorkoutToDoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => WorkoutToDo_1.WorkoutToDo)
], AggregateWorkoutToDoResolver);
exports.AggregateWorkoutToDoResolver = AggregateWorkoutToDoResolver;
