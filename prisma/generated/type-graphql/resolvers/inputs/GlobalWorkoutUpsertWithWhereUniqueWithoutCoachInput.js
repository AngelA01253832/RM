"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalWorkoutUpsertWithWhereUniqueWithoutCoachInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GlobalWorkoutCreateWithoutCoachInput_1 = require("../inputs/GlobalWorkoutCreateWithoutCoachInput");
const GlobalWorkoutUpdateWithoutCoachInput_1 = require("../inputs/GlobalWorkoutUpdateWithoutCoachInput");
const GlobalWorkoutWhereUniqueInput_1 = require("../inputs/GlobalWorkoutWhereUniqueInput");
let GlobalWorkoutUpsertWithWhereUniqueWithoutCoachInput = class GlobalWorkoutUpsertWithWhereUniqueWithoutCoachInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlobalWorkoutWhereUniqueInput_1.GlobalWorkoutWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", GlobalWorkoutWhereUniqueInput_1.GlobalWorkoutWhereUniqueInput)
], GlobalWorkoutUpsertWithWhereUniqueWithoutCoachInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlobalWorkoutUpdateWithoutCoachInput_1.GlobalWorkoutUpdateWithoutCoachInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", GlobalWorkoutUpdateWithoutCoachInput_1.GlobalWorkoutUpdateWithoutCoachInput)
], GlobalWorkoutUpsertWithWhereUniqueWithoutCoachInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlobalWorkoutCreateWithoutCoachInput_1.GlobalWorkoutCreateWithoutCoachInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", GlobalWorkoutCreateWithoutCoachInput_1.GlobalWorkoutCreateWithoutCoachInput)
], GlobalWorkoutUpsertWithWhereUniqueWithoutCoachInput.prototype, "create", void 0);
GlobalWorkoutUpsertWithWhereUniqueWithoutCoachInput = tslib_1.__decorate([
    TypeGraphQL.InputType("GlobalWorkoutUpsertWithWhereUniqueWithoutCoachInput", {
        isAbstract: true
    })
], GlobalWorkoutUpsertWithWhereUniqueWithoutCoachInput);
exports.GlobalWorkoutUpsertWithWhereUniqueWithoutCoachInput = GlobalWorkoutUpsertWithWhereUniqueWithoutCoachInput;
