"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertCoachArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CoachCreateInput_1 = require("../../../inputs/CoachCreateInput");
const CoachUpdateInput_1 = require("../../../inputs/CoachUpdateInput");
const CoachWhereUniqueInput_1 = require("../../../inputs/CoachWhereUniqueInput");
let UpsertCoachArgs = class UpsertCoachArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachWhereUniqueInput_1.CoachWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CoachWhereUniqueInput_1.CoachWhereUniqueInput)
], UpsertCoachArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachCreateInput_1.CoachCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CoachCreateInput_1.CoachCreateInput)
], UpsertCoachArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachUpdateInput_1.CoachUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CoachUpdateInput_1.CoachUpdateInput)
], UpsertCoachArgs.prototype, "update", void 0);
UpsertCoachArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertCoachArgs);
exports.UpsertCoachArgs = UpsertCoachArgs;
