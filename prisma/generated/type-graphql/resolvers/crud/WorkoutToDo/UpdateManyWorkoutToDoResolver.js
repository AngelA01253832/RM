"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyWorkoutToDoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateManyWorkoutToDoArgs_1 = require("./args/UpdateManyWorkoutToDoArgs");
const WorkoutToDo_1 = require("../../../models/WorkoutToDo");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyWorkoutToDoResolver = class UpdateManyWorkoutToDoResolver {
    async updateManyWorkoutToDo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).workoutToDo.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyWorkoutToDoArgs_1.UpdateManyWorkoutToDoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyWorkoutToDoResolver.prototype, "updateManyWorkoutToDo", null);
UpdateManyWorkoutToDoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => WorkoutToDo_1.WorkoutToDo)
], UpdateManyWorkoutToDoResolver);
exports.UpdateManyWorkoutToDoResolver = UpdateManyWorkoutToDoResolver;
