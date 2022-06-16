"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCoachArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CoachWhereInput_1 = require("../../../inputs/CoachWhereInput");
let DeleteManyCoachArgs = class DeleteManyCoachArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachWhereInput_1.CoachWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachWhereInput_1.CoachWhereInput)
], DeleteManyCoachArgs.prototype, "where", void 0);
DeleteManyCoachArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyCoachArgs);
exports.DeleteManyCoachArgs = DeleteManyCoachArgs;
