"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyAthleteArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AthleteWhereInput_1 = require("../../../inputs/AthleteWhereInput");
let DeleteManyAthleteArgs = class DeleteManyAthleteArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteWhereInput_1.AthleteWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteWhereInput_1.AthleteWhereInput)
], DeleteManyAthleteArgs.prototype, "where", void 0);
DeleteManyAthleteArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyAthleteArgs);
exports.DeleteManyAthleteArgs = DeleteManyAthleteArgs;
