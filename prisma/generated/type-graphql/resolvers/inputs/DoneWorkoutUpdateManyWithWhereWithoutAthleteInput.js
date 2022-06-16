"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoneWorkoutUpdateManyWithWhereWithoutAthleteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DoneWorkoutScalarWhereInput_1 = require("../inputs/DoneWorkoutScalarWhereInput");
const DoneWorkoutUpdateManyMutationInput_1 = require("../inputs/DoneWorkoutUpdateManyMutationInput");
let DoneWorkoutUpdateManyWithWhereWithoutAthleteInput = class DoneWorkoutUpdateManyWithWhereWithoutAthleteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutScalarWhereInput_1.DoneWorkoutScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DoneWorkoutScalarWhereInput_1.DoneWorkoutScalarWhereInput)
], DoneWorkoutUpdateManyWithWhereWithoutAthleteInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutUpdateManyMutationInput_1.DoneWorkoutUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DoneWorkoutUpdateManyMutationInput_1.DoneWorkoutUpdateManyMutationInput)
], DoneWorkoutUpdateManyWithWhereWithoutAthleteInput.prototype, "data", void 0);
DoneWorkoutUpdateManyWithWhereWithoutAthleteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DoneWorkoutUpdateManyWithWhereWithoutAthleteInput", {
        isAbstract: true
    })
], DoneWorkoutUpdateManyWithWhereWithoutAthleteInput);
exports.DoneWorkoutUpdateManyWithWhereWithoutAthleteInput = DoneWorkoutUpdateManyWithWhereWithoutAthleteInput;
