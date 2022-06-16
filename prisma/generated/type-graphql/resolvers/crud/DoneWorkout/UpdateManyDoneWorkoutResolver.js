"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyDoneWorkoutResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateManyDoneWorkoutArgs_1 = require("./args/UpdateManyDoneWorkoutArgs");
const DoneWorkout_1 = require("../../../models/DoneWorkout");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyDoneWorkoutResolver = class UpdateManyDoneWorkoutResolver {
    async updateManyDoneWorkout(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).doneWorkout.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyDoneWorkoutArgs_1.UpdateManyDoneWorkoutArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyDoneWorkoutResolver.prototype, "updateManyDoneWorkout", null);
UpdateManyDoneWorkoutResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => DoneWorkout_1.DoneWorkout)
], UpdateManyDoneWorkoutResolver);
exports.UpdateManyDoneWorkoutResolver = UpdateManyDoneWorkoutResolver;
