"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertAthleteArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AthleteCreateInput_1 = require("../../../inputs/AthleteCreateInput");
const AthleteUpdateInput_1 = require("../../../inputs/AthleteUpdateInput");
const AthleteWhereUniqueInput_1 = require("../../../inputs/AthleteWhereUniqueInput");
let UpsertAthleteArgs = class UpsertAthleteArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteWhereUniqueInput_1.AthleteWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AthleteWhereUniqueInput_1.AthleteWhereUniqueInput)
], UpsertAthleteArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteCreateInput_1.AthleteCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AthleteCreateInput_1.AthleteCreateInput)
], UpsertAthleteArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteUpdateInput_1.AthleteUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AthleteUpdateInput_1.AthleteUpdateInput)
], UpsertAthleteArgs.prototype, "update", void 0);
UpsertAthleteArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertAthleteArgs);
exports.UpsertAthleteArgs = UpsertAthleteArgs;
