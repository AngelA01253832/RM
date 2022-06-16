"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AthleteCreateNestedOneWithoutWorkoutstToDoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AthleteCreateOrConnectWithoutWorkoutstToDoInput_1 = require("../inputs/AthleteCreateOrConnectWithoutWorkoutstToDoInput");
const AthleteCreateWithoutWorkoutstToDoInput_1 = require("../inputs/AthleteCreateWithoutWorkoutstToDoInput");
const AthleteWhereUniqueInput_1 = require("../inputs/AthleteWhereUniqueInput");
let AthleteCreateNestedOneWithoutWorkoutstToDoInput = class AthleteCreateNestedOneWithoutWorkoutstToDoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteCreateWithoutWorkoutstToDoInput_1.AthleteCreateWithoutWorkoutstToDoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteCreateWithoutWorkoutstToDoInput_1.AthleteCreateWithoutWorkoutstToDoInput)
], AthleteCreateNestedOneWithoutWorkoutstToDoInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteCreateOrConnectWithoutWorkoutstToDoInput_1.AthleteCreateOrConnectWithoutWorkoutstToDoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteCreateOrConnectWithoutWorkoutstToDoInput_1.AthleteCreateOrConnectWithoutWorkoutstToDoInput)
], AthleteCreateNestedOneWithoutWorkoutstToDoInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteWhereUniqueInput_1.AthleteWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteWhereUniqueInput_1.AthleteWhereUniqueInput)
], AthleteCreateNestedOneWithoutWorkoutstToDoInput.prototype, "connect", void 0);
AthleteCreateNestedOneWithoutWorkoutstToDoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AthleteCreateNestedOneWithoutWorkoutstToDoInput", {
        isAbstract: true
    })
], AthleteCreateNestedOneWithoutWorkoutstToDoInput);
exports.AthleteCreateNestedOneWithoutWorkoutstToDoInput = AthleteCreateNestedOneWithoutWorkoutstToDoInput;
