"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutToDoUpsertWithWhereUniqueWithoutAthleteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkoutToDoCreateWithoutAthleteInput_1 = require("../inputs/WorkoutToDoCreateWithoutAthleteInput");
const WorkoutToDoUpdateWithoutAthleteInput_1 = require("../inputs/WorkoutToDoUpdateWithoutAthleteInput");
const WorkoutToDoWhereUniqueInput_1 = require("../inputs/WorkoutToDoWhereUniqueInput");
let WorkoutToDoUpsertWithWhereUniqueWithoutAthleteInput = class WorkoutToDoUpsertWithWhereUniqueWithoutAthleteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoWhereUniqueInput_1.WorkoutToDoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkoutToDoWhereUniqueInput_1.WorkoutToDoWhereUniqueInput)
], WorkoutToDoUpsertWithWhereUniqueWithoutAthleteInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoUpdateWithoutAthleteInput_1.WorkoutToDoUpdateWithoutAthleteInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkoutToDoUpdateWithoutAthleteInput_1.WorkoutToDoUpdateWithoutAthleteInput)
], WorkoutToDoUpsertWithWhereUniqueWithoutAthleteInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoCreateWithoutAthleteInput_1.WorkoutToDoCreateWithoutAthleteInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkoutToDoCreateWithoutAthleteInput_1.WorkoutToDoCreateWithoutAthleteInput)
], WorkoutToDoUpsertWithWhereUniqueWithoutAthleteInput.prototype, "create", void 0);
WorkoutToDoUpsertWithWhereUniqueWithoutAthleteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkoutToDoUpsertWithWhereUniqueWithoutAthleteInput", {
        isAbstract: true
    })
], WorkoutToDoUpsertWithWhereUniqueWithoutAthleteInput);
exports.WorkoutToDoUpsertWithWhereUniqueWithoutAthleteInput = WorkoutToDoUpsertWithWhereUniqueWithoutAthleteInput;
