"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalWorkoutUpdateWithWhereUniqueWithoutCoachInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GlobalWorkoutUpdateWithoutCoachInput_1 = require("../inputs/GlobalWorkoutUpdateWithoutCoachInput");
const GlobalWorkoutWhereUniqueInput_1 = require("../inputs/GlobalWorkoutWhereUniqueInput");
let GlobalWorkoutUpdateWithWhereUniqueWithoutCoachInput = class GlobalWorkoutUpdateWithWhereUniqueWithoutCoachInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlobalWorkoutWhereUniqueInput_1.GlobalWorkoutWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", GlobalWorkoutWhereUniqueInput_1.GlobalWorkoutWhereUniqueInput)
], GlobalWorkoutUpdateWithWhereUniqueWithoutCoachInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlobalWorkoutUpdateWithoutCoachInput_1.GlobalWorkoutUpdateWithoutCoachInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", GlobalWorkoutUpdateWithoutCoachInput_1.GlobalWorkoutUpdateWithoutCoachInput)
], GlobalWorkoutUpdateWithWhereUniqueWithoutCoachInput.prototype, "data", void 0);
GlobalWorkoutUpdateWithWhereUniqueWithoutCoachInput = tslib_1.__decorate([
    TypeGraphQL.InputType("GlobalWorkoutUpdateWithWhereUniqueWithoutCoachInput", {
        isAbstract: true
    })
], GlobalWorkoutUpdateWithWhereUniqueWithoutCoachInput);
exports.GlobalWorkoutUpdateWithWhereUniqueWithoutCoachInput = GlobalWorkoutUpdateWithWhereUniqueWithoutCoachInput;
