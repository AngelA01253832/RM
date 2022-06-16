"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyWorkoutToDoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkoutToDoUpdateManyMutationInput_1 = require("../../../inputs/WorkoutToDoUpdateManyMutationInput");
const WorkoutToDoWhereInput_1 = require("../../../inputs/WorkoutToDoWhereInput");
let UpdateManyWorkoutToDoArgs = class UpdateManyWorkoutToDoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoUpdateManyMutationInput_1.WorkoutToDoUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkoutToDoUpdateManyMutationInput_1.WorkoutToDoUpdateManyMutationInput)
], UpdateManyWorkoutToDoArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoWhereInput_1.WorkoutToDoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkoutToDoWhereInput_1.WorkoutToDoWhereInput)
], UpdateManyWorkoutToDoArgs.prototype, "where", void 0);
UpdateManyWorkoutToDoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyWorkoutToDoArgs);
exports.UpdateManyWorkoutToDoArgs = UpdateManyWorkoutToDoArgs;
