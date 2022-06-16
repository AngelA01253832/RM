"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAthleteArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AthleteCreateInput_1 = require("../../../inputs/AthleteCreateInput");
let CreateAthleteArgs = class CreateAthleteArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteCreateInput_1.AthleteCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AthleteCreateInput_1.AthleteCreateInput)
], CreateAthleteArgs.prototype, "data", void 0);
CreateAthleteArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateAthleteArgs);
exports.CreateAthleteArgs = CreateAthleteArgs;
