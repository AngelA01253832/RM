"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteWorkoutToDoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkoutToDoWhereUniqueInput_1 = require("../../../inputs/WorkoutToDoWhereUniqueInput");
let DeleteWorkoutToDoArgs = class DeleteWorkoutToDoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoWhereUniqueInput_1.WorkoutToDoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkoutToDoWhereUniqueInput_1.WorkoutToDoWhereUniqueInput)
], DeleteWorkoutToDoArgs.prototype, "where", void 0);
DeleteWorkoutToDoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteWorkoutToDoArgs);
exports.DeleteWorkoutToDoArgs = DeleteWorkoutToDoArgs;
