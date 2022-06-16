"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoneWorkoutUpdateWithWhereUniqueWithoutAthleteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DoneWorkoutUpdateWithoutAthleteInput_1 = require("../inputs/DoneWorkoutUpdateWithoutAthleteInput");
const DoneWorkoutWhereUniqueInput_1 = require("../inputs/DoneWorkoutWhereUniqueInput");
let DoneWorkoutUpdateWithWhereUniqueWithoutAthleteInput = class DoneWorkoutUpdateWithWhereUniqueWithoutAthleteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutWhereUniqueInput_1.DoneWorkoutWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DoneWorkoutWhereUniqueInput_1.DoneWorkoutWhereUniqueInput)
], DoneWorkoutUpdateWithWhereUniqueWithoutAthleteInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutUpdateWithoutAthleteInput_1.DoneWorkoutUpdateWithoutAthleteInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DoneWorkoutUpdateWithoutAthleteInput_1.DoneWorkoutUpdateWithoutAthleteInput)
], DoneWorkoutUpdateWithWhereUniqueWithoutAthleteInput.prototype, "data", void 0);
DoneWorkoutUpdateWithWhereUniqueWithoutAthleteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DoneWorkoutUpdateWithWhereUniqueWithoutAthleteInput", {
        isAbstract: true
    })
], DoneWorkoutUpdateWithWhereUniqueWithoutAthleteInput);
exports.DoneWorkoutUpdateWithWhereUniqueWithoutAthleteInput = DoneWorkoutUpdateWithWhereUniqueWithoutAthleteInput;
