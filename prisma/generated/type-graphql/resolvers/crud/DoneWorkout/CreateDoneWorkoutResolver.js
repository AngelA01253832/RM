"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDoneWorkoutResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateDoneWorkoutArgs_1 = require("./args/CreateDoneWorkoutArgs");
const DoneWorkout_1 = require("../../../models/DoneWorkout");
const helpers_1 = require("../../../helpers");
let CreateDoneWorkoutResolver = class CreateDoneWorkoutResolver {
    async createDoneWorkout(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).doneWorkout.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => DoneWorkout_1.DoneWorkout, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateDoneWorkoutArgs_1.CreateDoneWorkoutArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateDoneWorkoutResolver.prototype, "createDoneWorkout", null);
CreateDoneWorkoutResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => DoneWorkout_1.DoneWorkout)
], CreateDoneWorkoutResolver);
exports.CreateDoneWorkoutResolver = CreateDoneWorkoutResolver;
