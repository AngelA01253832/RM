"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWorkoutToDoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkoutToDoUpdateInput_1 = require("../../../inputs/WorkoutToDoUpdateInput");
const WorkoutToDoWhereUniqueInput_1 = require("../../../inputs/WorkoutToDoWhereUniqueInput");
let UpdateWorkoutToDoArgs = class UpdateWorkoutToDoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoUpdateInput_1.WorkoutToDoUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkoutToDoUpdateInput_1.WorkoutToDoUpdateInput)
], UpdateWorkoutToDoArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoWhereUniqueInput_1.WorkoutToDoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkoutToDoWhereUniqueInput_1.WorkoutToDoWhereUniqueInput)
], UpdateWorkoutToDoArgs.prototype, "where", void 0);
UpdateWorkoutToDoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateWorkoutToDoArgs);
exports.UpdateWorkoutToDoArgs = UpdateWorkoutToDoArgs;
