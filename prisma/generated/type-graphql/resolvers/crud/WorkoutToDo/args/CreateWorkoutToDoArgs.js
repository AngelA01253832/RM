"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWorkoutToDoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkoutToDoCreateInput_1 = require("../../../inputs/WorkoutToDoCreateInput");
let CreateWorkoutToDoArgs = class CreateWorkoutToDoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoCreateInput_1.WorkoutToDoCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkoutToDoCreateInput_1.WorkoutToDoCreateInput)
], CreateWorkoutToDoArgs.prototype, "data", void 0);
CreateWorkoutToDoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateWorkoutToDoArgs);
exports.CreateWorkoutToDoArgs = CreateWorkoutToDoArgs;
