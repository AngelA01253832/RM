"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCoachArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CoachUpdateManyMutationInput_1 = require("../../../inputs/CoachUpdateManyMutationInput");
const CoachWhereInput_1 = require("../../../inputs/CoachWhereInput");
let UpdateManyCoachArgs = class UpdateManyCoachArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachUpdateManyMutationInput_1.CoachUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CoachUpdateManyMutationInput_1.CoachUpdateManyMutationInput)
], UpdateManyCoachArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachWhereInput_1.CoachWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachWhereInput_1.CoachWhereInput)
], UpdateManyCoachArgs.prototype, "where", void 0);
UpdateManyCoachArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyCoachArgs);
exports.UpdateManyCoachArgs = UpdateManyCoachArgs;
