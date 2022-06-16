"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyWorkoutToDoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkoutToDoCreateManyInput_1 = require("../../../inputs/WorkoutToDoCreateManyInput");
let CreateManyWorkoutToDoArgs = class CreateManyWorkoutToDoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkoutToDoCreateManyInput_1.WorkoutToDoCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyWorkoutToDoArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyWorkoutToDoArgs.prototype, "skipDuplicates", void 0);
CreateManyWorkoutToDoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyWorkoutToDoArgs);
exports.CreateManyWorkoutToDoArgs = CreateManyWorkoutToDoArgs;
