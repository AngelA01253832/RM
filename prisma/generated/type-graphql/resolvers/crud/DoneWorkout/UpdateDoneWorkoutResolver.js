"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDoneWorkoutResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateDoneWorkoutArgs_1 = require("./args/UpdateDoneWorkoutArgs");
const DoneWorkout_1 = require("../../../models/DoneWorkout");
const helpers_1 = require("../../../helpers");
let UpdateDoneWorkoutResolver = class UpdateDoneWorkoutResolver {
    async updateDoneWorkout(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).doneWorkout.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => DoneWorkout_1.DoneWorkout, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateDoneWorkoutArgs_1.UpdateDoneWorkoutArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateDoneWorkoutResolver.prototype, "updateDoneWorkout", null);
UpdateDoneWorkoutResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => DoneWorkout_1.DoneWorkout)
], UpdateDoneWorkoutResolver);
exports.UpdateDoneWorkoutResolver = UpdateDoneWorkoutResolver;
