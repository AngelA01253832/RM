"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutToDoUpdateWithWhereUniqueWithoutAthleteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkoutToDoUpdateWithoutAthleteInput_1 = require("../inputs/WorkoutToDoUpdateWithoutAthleteInput");
const WorkoutToDoWhereUniqueInput_1 = require("../inputs/WorkoutToDoWhereUniqueInput");
let WorkoutToDoUpdateWithWhereUniqueWithoutAthleteInput = class WorkoutToDoUpdateWithWhereUniqueWithoutAthleteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoWhereUniqueInput_1.WorkoutToDoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkoutToDoWhereUniqueInput_1.WorkoutToDoWhereUniqueInput)
], WorkoutToDoUpdateWithWhereUniqueWithoutAthleteInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoUpdateWithoutAthleteInput_1.WorkoutToDoUpdateWithoutAthleteInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkoutToDoUpdateWithoutAthleteInput_1.WorkoutToDoUpdateWithoutAthleteInput)
], WorkoutToDoUpdateWithWhereUniqueWithoutAthleteInput.prototype, "data", void 0);
WorkoutToDoUpdateWithWhereUniqueWithoutAthleteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkoutToDoUpdateWithWhereUniqueWithoutAthleteInput", {
        isAbstract: true
    })
], WorkoutToDoUpdateWithWhereUniqueWithoutAthleteInput);
exports.WorkoutToDoUpdateWithWhereUniqueWithoutAthleteInput = WorkoutToDoUpdateWithWhereUniqueWithoutAthleteInput;
