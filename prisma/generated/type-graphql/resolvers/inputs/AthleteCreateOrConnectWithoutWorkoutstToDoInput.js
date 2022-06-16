"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AthleteCreateOrConnectWithoutWorkoutstToDoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AthleteCreateWithoutWorkoutstToDoInput_1 = require("../inputs/AthleteCreateWithoutWorkoutstToDoInput");
const AthleteWhereUniqueInput_1 = require("../inputs/AthleteWhereUniqueInput");
let AthleteCreateOrConnectWithoutWorkoutstToDoInput = class AthleteCreateOrConnectWithoutWorkoutstToDoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteWhereUniqueInput_1.AthleteWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AthleteWhereUniqueInput_1.AthleteWhereUniqueInput)
], AthleteCreateOrConnectWithoutWorkoutstToDoInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteCreateWithoutWorkoutstToDoInput_1.AthleteCreateWithoutWorkoutstToDoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AthleteCreateWithoutWorkoutstToDoInput_1.AthleteCreateWithoutWorkoutstToDoInput)
], AthleteCreateOrConnectWithoutWorkoutstToDoInput.prototype, "create", void 0);
AthleteCreateOrConnectWithoutWorkoutstToDoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AthleteCreateOrConnectWithoutWorkoutstToDoInput", {
        isAbstract: true
    })
], AthleteCreateOrConnectWithoutWorkoutstToDoInput);
exports.AthleteCreateOrConnectWithoutWorkoutstToDoInput = AthleteCreateOrConnectWithoutWorkoutstToDoInput;
