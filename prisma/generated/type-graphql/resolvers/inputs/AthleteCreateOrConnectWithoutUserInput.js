"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AthleteCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AthleteCreateWithoutUserInput_1 = require("../inputs/AthleteCreateWithoutUserInput");
const AthleteWhereUniqueInput_1 = require("../inputs/AthleteWhereUniqueInput");
let AthleteCreateOrConnectWithoutUserInput = class AthleteCreateOrConnectWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteWhereUniqueInput_1.AthleteWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AthleteWhereUniqueInput_1.AthleteWhereUniqueInput)
], AthleteCreateOrConnectWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteCreateWithoutUserInput_1.AthleteCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AthleteCreateWithoutUserInput_1.AthleteCreateWithoutUserInput)
], AthleteCreateOrConnectWithoutUserInput.prototype, "create", void 0);
AthleteCreateOrConnectWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AthleteCreateOrConnectWithoutUserInput", {
        isAbstract: true
    })
], AthleteCreateOrConnectWithoutUserInput);
exports.AthleteCreateOrConnectWithoutUserInput = AthleteCreateOrConnectWithoutUserInput;
