"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyAthleteArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AthleteUpdateManyMutationInput_1 = require("../../../inputs/AthleteUpdateManyMutationInput");
const AthleteWhereInput_1 = require("../../../inputs/AthleteWhereInput");
let UpdateManyAthleteArgs = class UpdateManyAthleteArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteUpdateManyMutationInput_1.AthleteUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AthleteUpdateManyMutationInput_1.AthleteUpdateManyMutationInput)
], UpdateManyAthleteArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteWhereInput_1.AthleteWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteWhereInput_1.AthleteWhereInput)
], UpdateManyAthleteArgs.prototype, "where", void 0);
UpdateManyAthleteArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyAthleteArgs);
exports.UpdateManyAthleteArgs = UpdateManyAthleteArgs;
