"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoneWorkoutUpsertWithWhereUniqueWithoutAthleteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DoneWorkoutCreateWithoutAthleteInput_1 = require("../inputs/DoneWorkoutCreateWithoutAthleteInput");
const DoneWorkoutUpdateWithoutAthleteInput_1 = require("../inputs/DoneWorkoutUpdateWithoutAthleteInput");
const DoneWorkoutWhereUniqueInput_1 = require("../inputs/DoneWorkoutWhereUniqueInput");
let DoneWorkoutUpsertWithWhereUniqueWithoutAthleteInput = class DoneWorkoutUpsertWithWhereUniqueWithoutAthleteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutWhereUniqueInput_1.DoneWorkoutWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DoneWorkoutWhereUniqueInput_1.DoneWorkoutWhereUniqueInput)
], DoneWorkoutUpsertWithWhereUniqueWithoutAthleteInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutUpdateWithoutAthleteInput_1.DoneWorkoutUpdateWithoutAthleteInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DoneWorkoutUpdateWithoutAthleteInput_1.DoneWorkoutUpdateWithoutAthleteInput)
], DoneWorkoutUpsertWithWhereUniqueWithoutAthleteInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutCreateWithoutAthleteInput_1.DoneWorkoutCreateWithoutAthleteInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DoneWorkoutCreateWithoutAthleteInput_1.DoneWorkoutCreateWithoutAthleteInput)
], DoneWorkoutUpsertWithWhereUniqueWithoutAthleteInput.prototype, "create", void 0);
DoneWorkoutUpsertWithWhereUniqueWithoutAthleteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DoneWorkoutUpsertWithWhereUniqueWithoutAthleteInput", {
        isAbstract: true
    })
], DoneWorkoutUpsertWithWhereUniqueWithoutAthleteInput);
exports.DoneWorkoutUpsertWithWhereUniqueWithoutAthleteInput = DoneWorkoutUpsertWithWhereUniqueWithoutAthleteInput;
