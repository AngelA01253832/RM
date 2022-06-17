"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoachUpsertWithoutGlobalWorkoutInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CoachCreateWithoutGlobalWorkoutInput_1 = require("../inputs/CoachCreateWithoutGlobalWorkoutInput");
const CoachUpdateWithoutGlobalWorkoutInput_1 = require("../inputs/CoachUpdateWithoutGlobalWorkoutInput");
let CoachUpsertWithoutGlobalWorkoutInput = class CoachUpsertWithoutGlobalWorkoutInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachUpdateWithoutGlobalWorkoutInput_1.CoachUpdateWithoutGlobalWorkoutInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CoachUpdateWithoutGlobalWorkoutInput_1.CoachUpdateWithoutGlobalWorkoutInput)
], CoachUpsertWithoutGlobalWorkoutInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachCreateWithoutGlobalWorkoutInput_1.CoachCreateWithoutGlobalWorkoutInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CoachCreateWithoutGlobalWorkoutInput_1.CoachCreateWithoutGlobalWorkoutInput)
], CoachUpsertWithoutGlobalWorkoutInput.prototype, "create", void 0);
CoachUpsertWithoutGlobalWorkoutInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CoachUpsertWithoutGlobalWorkoutInput", {
        isAbstract: true
    })
], CoachUpsertWithoutGlobalWorkoutInput);
exports.CoachUpsertWithoutGlobalWorkoutInput = CoachUpsertWithoutGlobalWorkoutInput;
