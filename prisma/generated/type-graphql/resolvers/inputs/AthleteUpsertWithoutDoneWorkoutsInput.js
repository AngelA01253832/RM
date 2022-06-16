"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AthleteUpsertWithoutDoneWorkoutsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AthleteCreateWithoutDoneWorkoutsInput_1 = require("../inputs/AthleteCreateWithoutDoneWorkoutsInput");
const AthleteUpdateWithoutDoneWorkoutsInput_1 = require("../inputs/AthleteUpdateWithoutDoneWorkoutsInput");
let AthleteUpsertWithoutDoneWorkoutsInput = class AthleteUpsertWithoutDoneWorkoutsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteUpdateWithoutDoneWorkoutsInput_1.AthleteUpdateWithoutDoneWorkoutsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AthleteUpdateWithoutDoneWorkoutsInput_1.AthleteUpdateWithoutDoneWorkoutsInput)
], AthleteUpsertWithoutDoneWorkoutsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteCreateWithoutDoneWorkoutsInput_1.AthleteCreateWithoutDoneWorkoutsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AthleteCreateWithoutDoneWorkoutsInput_1.AthleteCreateWithoutDoneWorkoutsInput)
], AthleteUpsertWithoutDoneWorkoutsInput.prototype, "create", void 0);
AthleteUpsertWithoutDoneWorkoutsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AthleteUpsertWithoutDoneWorkoutsInput", {
        isAbstract: true
    })
], AthleteUpsertWithoutDoneWorkoutsInput);
exports.AthleteUpsertWithoutDoneWorkoutsInput = AthleteUpsertWithoutDoneWorkoutsInput;
