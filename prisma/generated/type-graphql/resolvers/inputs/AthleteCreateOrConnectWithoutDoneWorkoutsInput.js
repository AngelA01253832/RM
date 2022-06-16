"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AthleteCreateOrConnectWithoutDoneWorkoutsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AthleteCreateWithoutDoneWorkoutsInput_1 = require("../inputs/AthleteCreateWithoutDoneWorkoutsInput");
const AthleteWhereUniqueInput_1 = require("../inputs/AthleteWhereUniqueInput");
let AthleteCreateOrConnectWithoutDoneWorkoutsInput = class AthleteCreateOrConnectWithoutDoneWorkoutsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteWhereUniqueInput_1.AthleteWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AthleteWhereUniqueInput_1.AthleteWhereUniqueInput)
], AthleteCreateOrConnectWithoutDoneWorkoutsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteCreateWithoutDoneWorkoutsInput_1.AthleteCreateWithoutDoneWorkoutsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AthleteCreateWithoutDoneWorkoutsInput_1.AthleteCreateWithoutDoneWorkoutsInput)
], AthleteCreateOrConnectWithoutDoneWorkoutsInput.prototype, "create", void 0);
AthleteCreateOrConnectWithoutDoneWorkoutsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AthleteCreateOrConnectWithoutDoneWorkoutsInput", {
        isAbstract: true
    })
], AthleteCreateOrConnectWithoutDoneWorkoutsInput);
exports.AthleteCreateOrConnectWithoutDoneWorkoutsInput = AthleteCreateOrConnectWithoutDoneWorkoutsInput;
