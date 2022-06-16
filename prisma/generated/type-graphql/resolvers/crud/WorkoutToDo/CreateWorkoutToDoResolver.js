"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWorkoutToDoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateWorkoutToDoArgs_1 = require("./args/CreateWorkoutToDoArgs");
const WorkoutToDo_1 = require("../../../models/WorkoutToDo");
const helpers_1 = require("../../../helpers");
let CreateWorkoutToDoResolver = class CreateWorkoutToDoResolver {
    async createWorkoutToDo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).workoutToDo.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => WorkoutToDo_1.WorkoutToDo, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateWorkoutToDoArgs_1.CreateWorkoutToDoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateWorkoutToDoResolver.prototype, "createWorkoutToDo", null);
CreateWorkoutToDoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => WorkoutToDo_1.WorkoutToDo)
], CreateWorkoutToDoResolver);
exports.CreateWorkoutToDoResolver = CreateWorkoutToDoResolver;
