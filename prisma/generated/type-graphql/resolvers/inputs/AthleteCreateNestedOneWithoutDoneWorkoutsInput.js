"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AthleteCreateNestedOneWithoutDoneWorkoutsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AthleteCreateOrConnectWithoutDoneWorkoutsInput_1 = require("../inputs/AthleteCreateOrConnectWithoutDoneWorkoutsInput");
const AthleteCreateWithoutDoneWorkoutsInput_1 = require("../inputs/AthleteCreateWithoutDoneWorkoutsInput");
const AthleteWhereUniqueInput_1 = require("../inputs/AthleteWhereUniqueInput");
let AthleteCreateNestedOneWithoutDoneWorkoutsInput = class AthleteCreateNestedOneWithoutDoneWorkoutsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteCreateWithoutDoneWorkoutsInput_1.AthleteCreateWithoutDoneWorkoutsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteCreateWithoutDoneWorkoutsInput_1.AthleteCreateWithoutDoneWorkoutsInput)
], AthleteCreateNestedOneWithoutDoneWorkoutsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteCreateOrConnectWithoutDoneWorkoutsInput_1.AthleteCreateOrConnectWithoutDoneWorkoutsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteCreateOrConnectWithoutDoneWorkoutsInput_1.AthleteCreateOrConnectWithoutDoneWorkoutsInput)
], AthleteCreateNestedOneWithoutDoneWorkoutsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteWhereUniqueInput_1.AthleteWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteWhereUniqueInput_1.AthleteWhereUniqueInput)
], AthleteCreateNestedOneWithoutDoneWorkoutsInput.prototype, "connect", void 0);
AthleteCreateNestedOneWithoutDoneWorkoutsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AthleteCreateNestedOneWithoutDoneWorkoutsInput", {
        isAbstract: true
    })
], AthleteCreateNestedOneWithoutDoneWorkoutsInput);
exports.AthleteCreateNestedOneWithoutDoneWorkoutsInput = AthleteCreateNestedOneWithoutDoneWorkoutsInput;
