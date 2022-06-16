"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAthleteArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AthleteUpdateInput_1 = require("../../../inputs/AthleteUpdateInput");
const AthleteWhereUniqueInput_1 = require("../../../inputs/AthleteWhereUniqueInput");
let UpdateAthleteArgs = class UpdateAthleteArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteUpdateInput_1.AthleteUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AthleteUpdateInput_1.AthleteUpdateInput)
], UpdateAthleteArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteWhereUniqueInput_1.AthleteWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AthleteWhereUniqueInput_1.AthleteWhereUniqueInput)
], UpdateAthleteArgs.prototype, "where", void 0);
UpdateAthleteArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateAthleteArgs);
exports.UpdateAthleteArgs = UpdateAthleteArgs;
