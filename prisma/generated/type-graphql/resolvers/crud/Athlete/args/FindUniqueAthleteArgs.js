"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueAthleteArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AthleteWhereUniqueInput_1 = require("../../../inputs/AthleteWhereUniqueInput");
let FindUniqueAthleteArgs = class FindUniqueAthleteArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteWhereUniqueInput_1.AthleteWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AthleteWhereUniqueInput_1.AthleteWhereUniqueInput)
], FindUniqueAthleteArgs.prototype, "where", void 0);
FindUniqueAthleteArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueAthleteArgs);
exports.FindUniqueAthleteArgs = FindUniqueAthleteArgs;
