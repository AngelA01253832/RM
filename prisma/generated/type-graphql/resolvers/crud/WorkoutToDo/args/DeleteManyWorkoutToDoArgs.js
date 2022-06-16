"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyWorkoutToDoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkoutToDoWhereInput_1 = require("../../../inputs/WorkoutToDoWhereInput");
let DeleteManyWorkoutToDoArgs = class DeleteManyWorkoutToDoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoWhereInput_1.WorkoutToDoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkoutToDoWhereInput_1.WorkoutToDoWhereInput)
], DeleteManyWorkoutToDoArgs.prototype, "where", void 0);
DeleteManyWorkoutToDoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyWorkoutToDoArgs);
exports.DeleteManyWorkoutToDoArgs = DeleteManyWorkoutToDoArgs;
