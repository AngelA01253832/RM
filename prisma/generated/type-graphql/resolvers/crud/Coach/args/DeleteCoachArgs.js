"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCoachArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CoachWhereUniqueInput_1 = require("../../../inputs/CoachWhereUniqueInput");
let DeleteCoachArgs = class DeleteCoachArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachWhereUniqueInput_1.CoachWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CoachWhereUniqueInput_1.CoachWhereUniqueInput)
], DeleteCoachArgs.prototype, "where", void 0);
DeleteCoachArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteCoachArgs);
exports.DeleteCoachArgs = DeleteCoachArgs;
