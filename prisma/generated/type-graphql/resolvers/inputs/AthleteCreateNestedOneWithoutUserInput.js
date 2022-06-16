"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AthleteCreateNestedOneWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AthleteCreateOrConnectWithoutUserInput_1 = require("../inputs/AthleteCreateOrConnectWithoutUserInput");
const AthleteCreateWithoutUserInput_1 = require("../inputs/AthleteCreateWithoutUserInput");
const AthleteWhereUniqueInput_1 = require("../inputs/AthleteWhereUniqueInput");
let AthleteCreateNestedOneWithoutUserInput = class AthleteCreateNestedOneWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteCreateWithoutUserInput_1.AthleteCreateWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteCreateWithoutUserInput_1.AthleteCreateWithoutUserInput)
], AthleteCreateNestedOneWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteCreateOrConnectWithoutUserInput_1.AthleteCreateOrConnectWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteCreateOrConnectWithoutUserInput_1.AthleteCreateOrConnectWithoutUserInput)
], AthleteCreateNestedOneWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteWhereUniqueInput_1.AthleteWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteWhereUniqueInput_1.AthleteWhereUniqueInput)
], AthleteCreateNestedOneWithoutUserInput.prototype, "connect", void 0);
AthleteCreateNestedOneWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AthleteCreateNestedOneWithoutUserInput", {
        isAbstract: true
    })
], AthleteCreateNestedOneWithoutUserInput);
exports.AthleteCreateNestedOneWithoutUserInput = AthleteCreateNestedOneWithoutUserInput;
