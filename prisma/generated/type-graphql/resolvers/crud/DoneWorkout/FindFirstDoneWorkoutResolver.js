"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstDoneWorkoutResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstDoneWorkoutArgs_1 = require("./args/FindFirstDoneWorkoutArgs");
const DoneWorkout_1 = require("../../../models/DoneWorkout");
const helpers_1 = require("../../../helpers");
let FindFirstDoneWorkoutResolver = class FindFirstDoneWorkoutResolver {
    async findFirstDoneWorkout(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).doneWorkout.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => DoneWorkout_1.DoneWorkout, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstDoneWorkoutArgs_1.FindFirstDoneWorkoutArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstDoneWorkoutResolver.prototype, "findFirstDoneWorkout", null);
FindFirstDoneWorkoutResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => DoneWorkout_1.DoneWorkout)
], FindFirstDoneWorkoutResolver);
exports.FindFirstDoneWorkoutResolver = FindFirstDoneWorkoutResolver;
