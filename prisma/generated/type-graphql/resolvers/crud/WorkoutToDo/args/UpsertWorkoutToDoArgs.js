"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertWorkoutToDoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkoutToDoCreateInput_1 = require("../../../inputs/WorkoutToDoCreateInput");
const WorkoutToDoUpdateInput_1 = require("../../../inputs/WorkoutToDoUpdateInput");
const WorkoutToDoWhereUniqueInput_1 = require("../../../inputs/WorkoutToDoWhereUniqueInput");
let UpsertWorkoutToDoArgs = class UpsertWorkoutToDoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoWhereUniqueInput_1.WorkoutToDoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkoutToDoWhereUniqueInput_1.WorkoutToDoWhereUniqueInput)
], UpsertWorkoutToDoArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoCreateInput_1.WorkoutToDoCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkoutToDoCreateInput_1.WorkoutToDoCreateInput)
], UpsertWorkoutToDoArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoUpdateInput_1.WorkoutToDoUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkoutToDoUpdateInput_1.WorkoutToDoUpdateInput)
], UpsertWorkoutToDoArgs.prototype, "update", void 0);
UpsertWorkoutToDoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertWorkoutToDoArgs);
exports.UpsertWorkoutToDoArgs = UpsertWorkoutToDoArgs;
