"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutToDoUpsertWithWhereUniqueWithoutCoachInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkoutToDoCreateWithoutCoachInput_1 = require("../inputs/WorkoutToDoCreateWithoutCoachInput");
const WorkoutToDoUpdateWithoutCoachInput_1 = require("../inputs/WorkoutToDoUpdateWithoutCoachInput");
const WorkoutToDoWhereUniqueInput_1 = require("../inputs/WorkoutToDoWhereUniqueInput");
let WorkoutToDoUpsertWithWhereUniqueWithoutCoachInput = class WorkoutToDoUpsertWithWhereUniqueWithoutCoachInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoWhereUniqueInput_1.WorkoutToDoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkoutToDoWhereUniqueInput_1.WorkoutToDoWhereUniqueInput)
], WorkoutToDoUpsertWithWhereUniqueWithoutCoachInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoUpdateWithoutCoachInput_1.WorkoutToDoUpdateWithoutCoachInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkoutToDoUpdateWithoutCoachInput_1.WorkoutToDoUpdateWithoutCoachInput)
], WorkoutToDoUpsertWithWhereUniqueWithoutCoachInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoCreateWithoutCoachInput_1.WorkoutToDoCreateWithoutCoachInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkoutToDoCreateWithoutCoachInput_1.WorkoutToDoCreateWithoutCoachInput)
], WorkoutToDoUpsertWithWhereUniqueWithoutCoachInput.prototype, "create", void 0);
WorkoutToDoUpsertWithWhereUniqueWithoutCoachInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkoutToDoUpsertWithWhereUniqueWithoutCoachInput", {
        isAbstract: true
    })
], WorkoutToDoUpsertWithWhereUniqueWithoutCoachInput);
exports.WorkoutToDoUpsertWithWhereUniqueWithoutCoachInput = WorkoutToDoUpsertWithWhereUniqueWithoutCoachInput;
