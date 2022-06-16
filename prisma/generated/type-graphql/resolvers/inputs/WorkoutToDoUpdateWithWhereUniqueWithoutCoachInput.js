"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutToDoUpdateWithWhereUniqueWithoutCoachInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkoutToDoUpdateWithoutCoachInput_1 = require("../inputs/WorkoutToDoUpdateWithoutCoachInput");
const WorkoutToDoWhereUniqueInput_1 = require("../inputs/WorkoutToDoWhereUniqueInput");
let WorkoutToDoUpdateWithWhereUniqueWithoutCoachInput = class WorkoutToDoUpdateWithWhereUniqueWithoutCoachInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoWhereUniqueInput_1.WorkoutToDoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkoutToDoWhereUniqueInput_1.WorkoutToDoWhereUniqueInput)
], WorkoutToDoUpdateWithWhereUniqueWithoutCoachInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoUpdateWithoutCoachInput_1.WorkoutToDoUpdateWithoutCoachInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkoutToDoUpdateWithoutCoachInput_1.WorkoutToDoUpdateWithoutCoachInput)
], WorkoutToDoUpdateWithWhereUniqueWithoutCoachInput.prototype, "data", void 0);
WorkoutToDoUpdateWithWhereUniqueWithoutCoachInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkoutToDoUpdateWithWhereUniqueWithoutCoachInput", {
        isAbstract: true
    })
], WorkoutToDoUpdateWithWhereUniqueWithoutCoachInput);
exports.WorkoutToDoUpdateWithWhereUniqueWithoutCoachInput = WorkoutToDoUpdateWithWhereUniqueWithoutCoachInput;
