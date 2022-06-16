"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAthleteArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AthleteWhereUniqueInput_1 = require("../../../inputs/AthleteWhereUniqueInput");
let DeleteAthleteArgs = class DeleteAthleteArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteWhereUniqueInput_1.AthleteWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AthleteWhereUniqueInput_1.AthleteWhereUniqueInput)
], DeleteAthleteArgs.prototype, "where", void 0);
DeleteAthleteArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteAthleteArgs);
exports.DeleteAthleteArgs = DeleteAthleteArgs;
