"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoachUpsertWithoutWorkoutToDoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CoachCreateWithoutWorkoutToDoInput_1 = require("../inputs/CoachCreateWithoutWorkoutToDoInput");
const CoachUpdateWithoutWorkoutToDoInput_1 = require("../inputs/CoachUpdateWithoutWorkoutToDoInput");
let CoachUpsertWithoutWorkoutToDoInput = class CoachUpsertWithoutWorkoutToDoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachUpdateWithoutWorkoutToDoInput_1.CoachUpdateWithoutWorkoutToDoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CoachUpdateWithoutWorkoutToDoInput_1.CoachUpdateWithoutWorkoutToDoInput)
], CoachUpsertWithoutWorkoutToDoInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachCreateWithoutWorkoutToDoInput_1.CoachCreateWithoutWorkoutToDoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CoachCreateWithoutWorkoutToDoInput_1.CoachCreateWithoutWorkoutToDoInput)
], CoachUpsertWithoutWorkoutToDoInput.prototype, "create", void 0);
CoachUpsertWithoutWorkoutToDoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CoachUpsertWithoutWorkoutToDoInput", {
        isAbstract: true
    })
], CoachUpsertWithoutWorkoutToDoInput);
exports.CoachUpsertWithoutWorkoutToDoInput = CoachUpsertWithoutWorkoutToDoInput;
